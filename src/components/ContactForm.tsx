import { useState } from 'react'
import { EMAIL } from '../content'
import { useI18n } from '../i18n/context'

type Field = 'name' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  'w-full rounded-[11px] border border-line bg-surface px-[15px] py-[13px] text-[14.5px] leading-[1.5] text-ink placeholder:text-placeholder'

/** Rótulos visíveis; erros, aviso de envio e o corpo do e-mail são sempre os mesmos. */
export type FormLabels = {
  name: { label: string; placeholder: string }
  email: { label: string; placeholder: string }
  message: { label: string; placeholder: string }
  submit: string
}

export default function ContactForm({ labels }: { labels?: FormLabels }) {
  const { t } = useI18n()
  const copy = { ...t.contact.form, ...(labels ?? {}) }

  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (field: Field) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSent(false)
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = copy.errors.name
    if (!values.email.trim()) next.email = copy.errors.email
    else if (!EMAIL_PATTERN.test(values.email.trim())) next.email = copy.errors.emailInvalid
    if (!values.message.trim()) next.message = copy.errors.message
    return next
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSent(false)
      return
    }

    const subject = copy.mail.subject(values.name.trim())
    const body = [
      `${copy.mail.nameLine}: ${values.name.trim()}`,
      `${copy.mail.emailLine}: ${values.email.trim()}`,
      '',
      values.message.trim(),
    ].join('\n')

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const textFields = [
    { id: 'name', field: 'name' as const, copy: copy.name, type: 'text', autoComplete: 'name' },
    { id: 'email', field: 'email' as const, copy: copy.email, type: 'email', autoComplete: 'email' },
  ]

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-[17px]">
      {textFields.map(({ id, field, copy: fieldCopy, type, autoComplete }) => (
        <div key={id} className="flex flex-col gap-[7px]">
          <label htmlFor={id} className="text-[13px] leading-[1.4] font-semibold text-ink">
            {fieldCopy.label}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            autoComplete={autoComplete}
            placeholder={fieldCopy.placeholder}
            value={values[field]}
            onChange={update(field)}
            aria-invalid={errors[field] ? true : undefined}
            aria-describedby={errors[field] ? `${id}-erro` : undefined}
            className={inputClass}
          />
          {errors[field] && (
            <p id={`${id}-erro`} className="text-[13px] text-red-600">
              {errors[field]}
            </p>
          )}
        </div>
      ))}

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="message" className="text-[13px] leading-[1.4] font-semibold text-ink">
          {copy.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={copy.message.placeholder}
          value={values.message}
          onChange={update('message')}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'message-erro' : undefined}
          className={`${inputClass} h-[132px] resize-y`}
        />
        {errors.message && (
          <p id="message-erro" className="text-[13px] text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="text-nav w-full rounded-pill bg-ink px-[26px] py-[15px] font-semibold text-white transition-opacity hover:opacity-85"
      >
        {copy.submit}
      </button>

      {/* Região viva permanente: fora do fluxo enquanto vazia, para não abrir um vão no formulário. */}
      <p aria-live="polite" className={sent ? 'text-[13px] text-muted' : 'sr-only'}>
        {sent ? copy.sending : ''}
      </p>
    </form>
  )
}
