import HandrockSVG from '../assets/SVG/hand-rock.svg'
import HandpaperSVG from '../assets/SVG/hand-paper.svg'
import UserprofileWhiteSVG from '../assets/SVG/user-profile-white.svg'
import UserprofileBlackSVG from '../assets/SVG/user-profile-black.svg'
import HandscissorSVG from '../assets/SVG/hand-scissor.svg'

export default function Playground(){
    return(
        <div className="w-full h-full p-10">
            <div className="w-full h-full bg-[#6774fd] rounded-xl flex flex-wrap justify-center items-center">
                
                {/* Profile 1 */}
                <div className="min-w-[300px] min-h-[300px] p-10 flex flex-col">
                    <div className=''><img src={HandrockSVG} alt="hand-rock.svg" /></div>
                    <div className='m-auto'><img src={UserprofileWhiteSVG} alt="user-profile.svg"/></div>
                </div>

                {/* Profile 2 */}
                <div className="min-w-[300px] min-h-[300px] p-10 flex flex-col">
                    <div className=''><img src={HandpaperSVG} alt="hand-rock.svg" /></div>
                    <div className='m-auto'><img src={UserprofileBlackSVG} alt="user-profile.svg"/></div>
                </div>
            </div>
        </div>
    )
}