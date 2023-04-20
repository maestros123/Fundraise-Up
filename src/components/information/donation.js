import './donation.scss';
import dollar from '../../images/dollar.svg'

export const Donation = () => {
    return (
        <div className="donation element">
            <div className="donation__top">
                <div className="donation__details">
                    <div className="donation__title">
                        <img src={dollar} alt=""/>
                        Donation
                    </div>
                    <div className="donation__amount">$20.60 USD <span>≈ €17.92 EUR</span></div>
                </div>
                <div className="donation__info">
                    <div className="donation__id">ID</div>
                    <div className="donation__id-number">TYNY694Y</div>
                </div>
            </div>
            <div className="donation__bottom">
                <div className="donation__item donation__item--first">
                    <div className="donation__name">Status</div>
                    <div className="donation__status donation__status--succeeded">Succeeded</div>
                </div>
                <div className="donation__item">
                    <div className="donation__name">Supporter</div>
                    <div className="donation__supporter">Charlotte Ann</div>
                </div>
                <div className="donation__item">
                    <div className="donation__name">Campaign</div>
                    <div className="donation__supporter">Heart walk</div>
                </div>
            </div>
        </div>
    )
}
