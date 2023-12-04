import CommonLayout from "@/Components/commonLayout";

export default function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <CommonLayout>{children}</CommonLayout>;
}
