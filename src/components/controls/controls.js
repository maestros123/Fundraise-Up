import './controls.scss'

export const Controls = () => {
    return (
        <div className="controls element">
            <div className="controls__item controls__item--first">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 0.75L15.75 3.75L12.75 6.75" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.25 8.25V6.75C2.25 5.95435 2.56607 5.19129 3.12868 4.62868C3.69129 4.06607 4.45435 3.75 5.25 3.75H15.75" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.25 17.25L2.25 14.25L5.25 11.25" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.75 9.75V11.25C15.75 12.0456 15.4339 12.8087 14.8713 13.3713C14.3087 13.9339 13.5456 14.25 12.75 14.25H2.25" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Change amount
            </div>
            <div className="controls__item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_12_240)">
                        <path d="M13.3199 3.95989V2.75677C13.3199 1.55761 13.0611 1.21165 11.5732 1.60405C10.4802 1.89241 4.08485 3.66541 4.08485 3.66541C2.11529 4.40773 1.81469 5.03953 1.81469 6.47917L1.79993 7.36297" stroke="#2F2F30" strokeMiterlimit="10" strokeLinejoin="round"/>
                        <path d="M12.5011 11.5C11.9478 11.5 11.4999 11.0523 11.4999 10.5006C11.4999 9.9484 11.9484 9.5 12.5011 9.5C13.0509 9.5 13.4999 9.94788 13.4999 10.5006C13.4999 11.0528 13.0514 11.5 12.5011 11.5Z" stroke="#2F2F30"/>
                        <rect x="1.7998" y="5.04974" width="14.4" height="11.15" rx="1.5" stroke="#2F2F30"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_12_240">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                Change payment method
            </div>
            <div className="controls__item active">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 1.5V4.5" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 1.5V4.5" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.25 7.5H15.75" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Change date
            </div>
            <div className="controls__item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.25 6.75L6.75 11.25" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 6.75L11.25 11.25" stroke="#2F2F30" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Cancel recurring
            </div>
        </div>
    )
}
