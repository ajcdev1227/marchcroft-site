import MainLayout from "../components/MainLayout"

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <MainLayout>
            <main>{children}</main>  
        </MainLayout>
    )
}