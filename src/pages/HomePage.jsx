import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'

export default function HomePage() {
    return (
        <div className="bg-bg h-[100vh] overflow-y-scroll">
            <Header />
            <div className='py-5 px-2'>
                <div className='w-[238px]'>
                    <SideBar/>
                </div>
            </div>
        </div>
    )
}
