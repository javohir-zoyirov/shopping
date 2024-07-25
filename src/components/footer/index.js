import "./style.css"
export const Footer = () => {
    return <div style={{backgroundColor:"#8DD9FF"}} className="p-3">
        <div className="row container mx-auto ">
        <div className="col-lg-3 col-md-6 col-12">
        <ul className="h-100">
            <li className="fw-bold">Hujjatlar</li>
            <li>Umumiy shartlar</li>
            <li>Ofertalar arxivi</li>
            <li>Nizom</li>
            <li>Guvohnoma</li>
        </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
        <ul>
            <li className="fw-bold">Servis</li>
            <li>Do’konlar</li>
            <li>Biz haqimizda</li>
            <li>Hamkorlik uchun</li>
            <li>Qaytarish</li>
            <li>Promokodlar</li>
        </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
        <ul>
            <li className="fw-bold">Axbarot xizmati</li>
            <li>contact.@nextstore.uz</li>
            <li>+998 97 712 96 96  <br/>
            +998 95 503 09 09</li>
            <li>Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</li>
        </ul>
        </div>
    </div>
    </div>
}