import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'

import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}

const tiers = [
  {
    name: 'Standard' as const,
    slug: 'Standard',
    description: '开始自由互联网所需的一切',
    priceMonthly: 25,
    href: 'https://cloud.halo.do',
    highlights: [
      { description: '每月可用 100GB 云流量，订单日重置' },
      { description: '稳定解锁流媒体平台及人工智能应用' },
      { description: '接入IEPL国际专线，高稳定性保障' },
      { description: '高达3个公网IP在线访问，无在线设备限制' },
      { description: '无任何退款政策，禁止任何违规业务', disabled: true },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 3 },
      { section: 'Features', name: 'Deal progress boards', value: 5 },
      { section: 'Features', name: 'Sourcing platforms', value: 'Select' },
      { section: 'Features', name: 'Contacts', value: 100 },
      { section: 'Features', name: 'AI assisted outreach', value: false },
      { section: 'Analysis', name: 'Competitor analysis', value: false },
      { section: 'Analysis', name: 'Dashboard reporting', value: false },
      { section: 'Analysis', name: 'Community insights', value: false },
      { section: 'Analysis', name: 'Performance analysis', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: false },
      { section: 'Support', name: 'Dedicated account manager', value: false },
    ],
  },
  {
    name: 'Enhanced' as const,
    slug: 'Enhanced',
    description: '为您的流媒体服务提供所有云流量',
    priceMonthly: 45,
    href: 'https://cloud.halo.do',
    highlights: [
      { description: '每月可用 200GB 云流量，订单日重置' },
      { description: '稳定解锁流媒体平台及人工智能应用' },
      { description: '接入IEPL国际专线，高稳定性保障' },
      { description: '高达3个公网IP在线访问，无在线设备限制' },
      { description: '无任何退款政策，禁止任何违规业务', disabled: true },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 10 },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 1000 },
      { section: 'Features', name: 'AI assisted outreach', value: true },
      { section: 'Analysis', name: 'Competitor analysis', value: '5 / month' },
      { section: 'Analysis', name: 'Dashboard reporting', value: true },
      { section: 'Analysis', name: 'Community insights', value: true },
      { section: 'Analysis', name: 'Performance analysis', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: true },
      { section: 'Support', name: 'Dedicated account manager', value: false },
    ],
  },
  {
    name: 'Premium' as const,
    slug: 'Premium',
    description: '增加灵活性，无需考虑任何限制',
    priceMonthly: 100,
    href: 'https://cloud.halo.do',
    highlights: [
      { description: '每月可用 500GB 云流量，订单日重置' },
      { description: '稳定解锁流媒体平台及人工智能应用' },
      { description: '接入IEPL国际专线，高稳定性保障' },
      { description: '高达3个公网IP在线访问，无在线设备限制' },
      { description: '无任何退款政策，禁止任何违规业务', disabled: true },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 'Unlimited' },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 'Unlimited' },
      { section: 'Features', name: 'AI assisted outreach', value: true },
      { section: 'Analysis', name: 'Competitor analysis', value: 'Unlimited' },
      { section: 'Analysis', name: 'Dashboard reporting', value: true },
      { section: 'Analysis', name: 'Community insights', value: true },
      { section: 'Analysis', name: 'Performance analysis', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: true },
      { section: 'Support', name: 'Dedicated account manager', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">一个简单的订阅，比较套餐和定价</Heading>
      <Lead className="mt-6 max-w-3xl">安全。隐私。自由。对于每个人。</Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ¥{tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>CNY</p>
              <p>每月</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>立即开始</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">套餐包括：</h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable() {
  return (
    <Container className="pt-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5" />
          <col className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5" />
          <col className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5" />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                className="p-0 data-[selected]:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {/* {tier.name} */}
                    <ChevronUpDownIcon className="size-4 fill-slate-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-[--button-width] rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-slate-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href="">
                Get started 111
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                className="px-0 pb-0 pt-4 data-[selected]:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pb-0 pt-10 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          className="p-4 data-[selected]:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

export function Pricing() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header />
      <PricingCards />
      {/* <PricingTable /> */}
    </main>
  )
}
