import Preloader from "../../mics/Preloader"
import Breadcrumb from "../Breadcrumb"
import Sidebar from "../Sidebar"
import TopBar from "../TopBar"
import DashboardPage from "./DashboardPage"

function MainAdminPage() {
    return (
        <>
            <Preloader />
            <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
                <TopBar />
                <Sidebar />
                <div class="page-wrapper">
                    <Breadcrumb />
                    <div class="container-fluid">
                        <DashboardPage />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainAdminPage
