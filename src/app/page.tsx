import { AppLayoutFooter, AppLayoutFooterLink } from '@namefi/storybook'
import Image from 'next/image'
import '@namefi/storybook/lib/index.css'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">

				<AppLayoutFooter
					links={
						<>
							<AppLayoutFooterLink href={'#'}>Contact Us</AppLayoutFooterLink>
							<AppLayoutFooterLink href={'#'}>Private Terms</AppLayoutFooterLink>
							<AppLayoutFooterLink href={'#'}>Terms & Conditions</AppLayoutFooterLink>
						</>
					}
				/>
      </div>
    </main>
  )
}
