// import { Banner } from '@/components/banner'
import { BentoSection } from '@/components/BentoSection'
import { Button } from '@/components/button'
import { CaseStudies } from '@/components/CaseStudies'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Pricing } from '@/components/price'
import { Testimonials } from '@/components/testimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    '光环网络，Halo Cloud，是一家创新的公司，致力于为全球用户提供高速、安全和匿名的全球加速服务。',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-7xl pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-center text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Halo Cloud.
          </h1>
          <p className="mt-8 text-center text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            高速、安全和匿名的全球加速服务，在线体验真正的自由。
            <br />
            通过快速安全的VPN，可以不受限制地访问全球内容，阻止烦人的广告并保护您的隐私。
          </p>
          <div className="mt-12 flex flex-col justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://cloud.halo.do" target="_blank">
              立即开始
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <Banner /> */}
      <CaseStudies />
      <BentoSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}
