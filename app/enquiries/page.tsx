import { Header } from "@/components/Header";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FooterBar } from "@/components/FooterBar";

export const metadata = {
  title: "Enquire — Steve O Smith",
  description: "Get in touch with Steve O Smith",
};

export default function EnquiriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-md mx-auto px-10 pt-20 pb-16 md:pt-24 md:pb-20">
        <EnquiryForm />
      </main>
      <FooterBar />
    </div>
  );
}
