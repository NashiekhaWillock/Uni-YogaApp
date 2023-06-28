export default function Splash() {
    return (

        <div className="Onboarding text-white bg-gray-400"> 
            <div className="splash bg-gray-600 h-screen flex items-center justify-center object-contain">
                <img src={require('../../assets/logo.png')} width={"50%"} alt="" className="flex items-center justify-center" />
            </div>
        </div>
    )
}