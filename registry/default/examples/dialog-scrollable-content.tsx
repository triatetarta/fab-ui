'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/registry/default/ui/dialog';

export function DialogScrollableContent() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant='outline' />}>
        Terms of Service
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read these terms carefully before using our service.
          </DialogDescription>
        </DialogHeader>
        <div className='-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4'>
          <div className='space-y-4 text-sm text-muted-foreground'>
            <section>
              <h3 className='mb-2 font-medium text-foreground'>
                1. Acceptance of Terms
              </h3>
              <p>
                By accessing and using this service, you accept and agree to be
                bound by the terms and provisions of this agreement.
              </p>
            </section>
            <section>
              <h3 className='mb-2 font-medium text-foreground'>
                2. Use License
              </h3>
              <p>
                Permission is granted to temporarily use this service for
                personal, non-commercial purposes only. This is the grant of a
                license, not a transfer of title.
              </p>
            </section>
            <section>
              <h3 className='mb-2 font-medium text-foreground'>
                3. User Account
              </h3>
              <p>
                You are responsible for maintaining the confidentiality of your
                account and password. You agree to accept responsibility for all
                activities that occur under your account.
              </p>
            </section>
            <section>
              <h3 className='mb-2 font-medium text-foreground'>
                4. Privacy Policy
              </h3>
              <p>
                Your use of this service is also governed by our Privacy Policy.
                Please review our Privacy Policy, which also governs the site
                and informs users of our data collection practices.
              </p>
            </section>
            <section>
              <h3 className='mb-2 font-medium text-foreground'>
                5. Limitation of Liability
              </h3>
              <p>
                In no event shall we be liable for any damages arising out of
                the use or inability to use the materials on this service, even
                if we have been notified of the possibility of such damage.
              </p>
            </section>
            <section>
              <h3 className='mb-2 font-medium text-foreground'>
                6. Modifications
              </h3>
              <p>
                We may revise these terms of service at any time without notice.
                By using this service you are agreeing to be bound by the then
                current version of these terms.
              </p>
            </section>
          </div>
        </div>
        <DialogFooter>
          <Button>I Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
