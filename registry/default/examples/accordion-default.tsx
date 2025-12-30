import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/registry/default/ui/accordion';

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export const accordionItems: AccordionItem[] = [
  {
    id: 'item-1',
    title: 'What is your return policy?',
    content:
      "We accept returns within 30 days of purchase, provided the item is unused and in its original condition. To start a return, you'll need your order number and the email address used at checkout. Once your return is approved, we'll send you instructions along with a prepaid return label (where applicable). Refunds are typically processed within 5-7 business days after the item is received.",
  },
  {
    id: 'item-2',
    title: 'How long does shipping take?',
    content:
      "Shipping times depend on your location and the shipping method selected at checkout. Standard shipping usually takes 3-5 business days, while express shipping can arrive in 1-2 business days. You'll receive a tracking link as soon as your order ships, so you can monitor delivery progress. Please note that delays may occur during peak periods or due to customs processing for international orders.",
  },
  {
    id: 'item-3',
    title: 'Do you offer customer support?',
    content:
      'Yes, our customer support team is here to help. You can reach us Monday through Friday from 9am to 5pm via email or live chat. We aim to respond to all inquiries within 24 hours, and often much sooner. For faster service, include your order number and a brief description of the issue so we can resolve it as quickly as possible.',
  },
];

export default function AccordionDemo() {
  return (
    <Accordion className='w-full'>
      {accordionItems.map((accordionItem) => {
        return (
          <AccordionItem key={accordionItem.id} value={accordionItem.id}>
            <AccordionTrigger>{accordionItem.title}</AccordionTrigger>
            <AccordionPanel>{accordionItem.content}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
