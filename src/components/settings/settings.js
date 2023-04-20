import './settings.scss'

export const Settings = () => {
    return (
        <form className="settings element">
            <div className="settings__menu">
                <div className="settings__item active">Behavior</div>
                <div className="settings__item">Appearance</div>
                <div className="settings__item">Custom Fields</div>
                <div className="settings__item">Questions</div>
                <div className="settings__item">URL Control</div>
            </div>
            <form className="settings__behavior">
                <div className="settings__wrapper">
                    <div className="settings__left">Designation</div>
                    <div className="settings__right">
                        <select name="" id="" className="settings__select  settings__select--big">
                            <option>Match Checkout Setting</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                </div>
                <div className="settings__wrapper">
                    <div className="settings__left">Goal</div>
                    <div className="settings__right">
                        <input className="settings__input" type="text" value="$10.00"/>
                        <select name="" id="" className="settings__select">
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                </div>

                <div className="settings__wrapper settings__wrapper--checkbox">
                    <div className="settings__left">Default Amount</div>
                    <div className="settings__right">
                        <div className="settings__radio">
                            <input type="radio" name="radio" value="1" id="radio-1" />
                            <label htmlFor="radio-1">Match Checkout Setting</label>
                        </div>
                        <div className="settings__radio">
                            <input type="radio" name="radio" value="1" id="radio-2" defaultChecked/>
                            <label htmlFor="radio-2">Customize</label>
                        </div>
                        <div className="settings__checkbox">
                            <input type="checkbox" name="checkbox" value="1" id="checkbox" defaultChecked/>
                            <label htmlFor="checkbox">Allow donor to change default currency</label>
                        </div>
                    </div>
                </div>

                <div className="settings__wrapper">
                    <div className="settings__left">Border size</div>
                    <div className="settings__right settings__range">
                        <input type="range" id="size" name="size"
                               min="0" max="3" defaultValue="2"/>
                        <span className="settings__range-value"></span>
                        <label htmlFor="size">2px</label>
                    </div>
                </div>
                <div className="settings__wrapper settings__wrapper--last">
                    <div className="settings__left">Border radius</div>
                    <div className="settings__right settings__range">
                        <input type="range" id="size" name="size"
                               min="0" max="23" defaultValue="15"/>
                        <span className="settings__range-value"></span>
                        <label htmlFor="size">15px</label>
                    </div>
                </div>

            </form>
            <div className="settings__footer">
                <button className="settings__save">Save changes</button>
                <button className="settings__cancel">Cancel</button>
            </div>
        </form>
    )
}
