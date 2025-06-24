import "./Events.css";

// Image assets from Figma export
const img1 = "assets/images/events-1.png";
const img2 = "assets/images/events-2.png";
const img3 = "assets/images/events-3.png";
const img4 = "assets/images/events-4.png";
const img5 = "assets/images/events-5.png";
const img6 = "assets/images/events-6.png";
const img7 = "assets/images/events-7.png";
const img8 = "assets/images/events-8.png";
const img9 = "assets/images/events-9.png";
const img10 = "assets/images/events-10.png";
const icon = "assets/images/breadcrumb.svg";

export default function Events() {
    return (
        <div className="events-section container-fluid py-5">
            {/* Header Row - Figma Native Layout */}
            <div className="row g-0 align-items-start mb-5 flex-lg-nowrap flex-wrap">
                <div className="col-lg-5 d-flex flex-column gap-3 text-end justify-content-start ps-lg-5 pt-4 pt-lg-0">
                    <h2 className="events-title text-start" style={{ fontSize: 36, lineHeight: '48.6px' }}>لمسة طبيعية لمناسبتك... نخلي النباتات تحكي!</h2>
                    <div className="events-desc text-start" style={{ fontSize: 24, lineHeight: '38.4px' }}>
                        في مساراتكو، نجهز مناسبتك بشكل مختلف… نزيّنها بالنباتات والزهور الطبيعية!<br />
                        سواء كانت حفلة صغيرة في البيت، أو فعالية رسمية في شركتك، نوفر لك تنسيق نباتي راقٍ يضيف للمكان أناقة وراحة.<br />ننسّق:
                    </div>
                    <div className="d-flex flex-column gap-2 align-items-start">
                        <div className="d-flex align-items-start text-start gap-2">
                            <img alt="icon" src={icon} className="events-icon" />
                            <span className="events-list-item" style={{ fontSize: 20, color: '#6F816E', lineHeight: '32px' }}>حفلات منزلية بسيطة (تخرج، خطبة، استقبال مولود، عيد ميلاد)</span>

                        </div>
                        <div className="d-flex align-items-start text-start gap-2">
                            <img alt="icon" src={icon} className="events-icon" />
                            <span className="events-list-item" style={{ fontSize: 20, color: '#6F816E', lineHeight: '32px' }}>فعاليات الشركات (ركن ترحيبي، طاولة اجتماعات، مدخل استقبال، اجتماعات مهمة)</span>

                        </div>
                        <div className="d-flex align-items-start text-start gap-2">
                            <img alt="icon" src={icon} className="events-icon" />
                            <span className="events-list-item" style={{ fontSize: 20, color: '#6F816E', lineHeight: '32px' }}>جلسات خارجية أو قعدات عائلية</span>

                        </div>
                        <div className="d-flex align-items-start text-start gap-2">
                            <img alt="icon" src={icon} className="events-icon" />
                            <span className="events-list-item" style={{ fontSize: 20, color: '#6F816E', lineHeight: '32px' }}>ديكور نباتي مؤقت لأركان خاصة أو تصوير</span>

                        </div>
                    </div>
                </div>
                <div className="col-lg-7 d-flex align-items-stretch">
                    <div className="d-flex w-100 gap-4">
                        <div className="d-flex flex-column justify-content-between align-items-stretch" style={{ flex: 1, gap: 0 }}>
                            <img src={img1} alt="event1" className="rounded-4 mb-4 flex-grow-1 w-100" style={{ borderRadius: 15, objectFit: 'cover', height: 532, minWidth: 0 }} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start gap-4" style={{ flex: 1 }}>
                            <img src={img2} alt="event2" className="rounded-4" style={{ width: 302, height: 305, borderRadius: 15, objectFit: 'cover' }} />
                            <img src={img3} alt="event3" className="rounded-4" style={{ width: 302, height: 203, borderRadius: 15, objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Previous Events - Figma Native Layout */}
            <div className="d-flex flex-column align-items-center gap-4 mb-5">
                <h2 className="events-title text-start" style={{ fontSize: 36, lineHeight: '48.6px' }}>أعمال تجهيزات المناسبات السابقة</h2>
                <div className="d-flex flex-column gap-3 w-100">
                    <div className="d-flex flex-row gap-4 w-100 justify-content-center align-items-center">
                        <img src={img4} alt="event4" className="rounded-4" style={{ width: 411, height: 313, borderRadius: 15, objectFit: 'cover' }} />
                        <img src={img5} alt="event5" className="rounded-4" style={{ width: 411, height: 313, borderRadius: 15, objectFit: 'cover' }} />
                        <img src={img6} alt="event6" className="rounded-4" style={{ width: 411, height: 313, borderRadius: 15, objectFit: 'cover' }} />
                    </div>
                    <div className="d-flex flex-row gap-4 w-100 justify-content-center align-items-center">
                        <img src={img7} alt="event7" className="rounded-4" style={{ width: 411, height: 313, borderRadius: 15, objectFit: 'cover' }} />
                        <img src={img8} alt="event8" className="rounded-4" style={{ width: 411, height: 313, borderRadius: 15, objectFit: 'cover' }} />
                        <img src={img10} alt="event10" className="rounded-4" style={{ width: 411, height: 313, borderRadius: 15, objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

            {/* Request Form */}
            <div className="row align-items-stretch g-4 mt-5">
                <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0 d-flex justify-content-center align-items-stretch">
                    <div className="events-img rounded-4 w-100 h-100" style={{ backgroundImage: `url(${img9})`, maxWidth: 500, minHeight: 0, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </div>
                <div className="col-lg-6 order-lg-1 d-flex align-items-stretch">
                    <div className="w-100 d-flex flex-column justify-content-center">
                        <h2 className="events-title text-start">أطلب خدمة تجهيز المناسبات الآن</h2>
                        <p className="events-desc text-start">جاهز نزيّن مناسبتك؟ عبي النموذج وخل الباقي علينا</p>
                        <form className="events-form p-4 rounded-4 mt-3 h-100">
                            <div className="row g-3 mb-2">
                                <div className="col-12 col-md-6">
                                    <label className="form-label events-label">الإسم</label>
                                    <input type="text" className="form-control events-input" placeholder="نورة عبدالله العتيبي" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label events-label">رقم الجوال</label>
                                    <input type="text" className="form-control events-input" placeholder="0501234567" />
                                </div>
                            </div>
                            <div className="row g-3 mb-2">
                                <div className="col-12 col-md-6">
                                    <label className="form-label events-label">البريد الإلكترونى</label>
                                    <input type="email" className="form-control events-input" placeholder="noura.alotaibi@email.com" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label events-label">مكان المناسبة</label>
                                    <input type="text" className="form-control events-input" placeholder="حديقة فيلا" />
                                </div>
                            </div>
                            <div className="row g-3 mb-2">
                                <div className="col-12 col-md-4">
                                    <label className="form-label events-label">تاريخ المناسبة</label>
                                    <input type="date" className="form-control events-input" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label className="form-label events-label">نوع المناسبة</label>
                                    <select className="form-select events-input">
                                        <option>حفل خطوبة</option>
                                        <option>تخرج</option>
                                        <option>عيد ميلاد</option>
                                        <option>اجتماع عمل</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-4">
                                    <label className="form-label events-label">المدينة</label>
                                    <input type="text" className="form-control events-input" placeholder="الرياض" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label events-label">ملاحظات إضافية</label>
                                <textarea className="form-control events-input" rows="2" placeholder="أكتب ملاحظاتك هنا ..."></textarea>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn events-btn px-4 py-2">إرسال</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}