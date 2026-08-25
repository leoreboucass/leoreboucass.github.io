import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import { LanguageProvider } from './i18n/context'
import { revealVisible, useRevealOnScroll } from './motion/reveal'
import { ANCHOR_OFFSET, getLenis, useSmoothScroll } from './motion/useSmoothScroll'

/**
 * Ao trocar de página a rolagem volta ao topo; com uma âncora na URL
 * (`/#projetos`), desliza até a seção. Como o Lenis é quem controla a rolagem,
 * é por ele que passamos — `window.scrollTo` seria desfeito no quadro seguinte.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return
    // Antes da pintura, para o sistema de entrada não revelar o que ficou para trás.
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    // A página nova já está posicionada: revela o que está à vista sem esperar
    // um quadro. Sem isso o conteúdo acima da dobra dependeria do MutationObserver.
    revealVisible()

    if (!hash) return
    const target = document.querySelector(hash)
    if (!target) return
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(target as HTMLElement, { offset: ANCHOR_OFFSET })
    else target.scrollIntoView()
  }, [pathname, hash])

  return null
}

function Site() {
  useSmoothScroll()
  useRevealOnScroll()

  return (
    <div>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos/:slug" element={<ProjectPage />} />
          <Route path="*" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </LanguageProvider>
  )
}
