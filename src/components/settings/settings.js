import './settings.scss'
import {useState} from "react";

export const Settings = () => {

    const [inputValue, setInputValue] = useState([2, 15])

    const inputSize = <>
        <input type="range" id="size" name="size" min="0" max="3" defaultValue="2" tabIndex="0"
               aria-label="Border size" aria-valuemin="0" aria-valuemax="3" aria-valuenow="2" aria-valuetext="2" onInput={handleInputChange}/>
        <output aria-live="polite">{inputValue[0]}</output>
        <span>px</span>
    </>

    const inputRadius = <>
        <input type="range" id="size" name="radius" min="0" max="23" defaultValue="15" tabIndex="0"
               aria-label="Border radius" aria-valuemin="0" aria-valuemax="23" aria-valuenow="15" aria-valuetext="15"  onInput={handleInputChange}/>
        <output aria-live="polite">{inputValue[1]}</output>
        <span>px</span>
    </>


    function handleInputChange(e) {
        let target = e.target;

        const min = target.min;
        const max = target.max;
        const val = target.value;

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';


        const newArray = [...inputValue];
        if (target.name === 'size') {
            newArray[0] = val;
        } else {
            newArray[1] = val;
        }
        setInputValue(newArray);
    }

    const [activeItem, setActiveitem] = useState(0);

    const itemsData = ['Behavior', 'Appearance', 'Custom Fields', 'Questions', 'URL Control'];

    function handleActive(i) {
        setActiveitem(i)
    }

    const items = itemsData.map((item, i) => {
        const itemClass = activeItem === i ? 'settings__item active' : 'settings__item';
        return (
            <div key={i} onClick={() => handleActive(i)} className={itemClass} tabIndex="0"
                 aria-label={item + ' settings button'}>
                {item}
            </div>
        )
    })


    return (
        <div className="settings element">
            <div className="settings__menu">
                {items}
            </div>
            <form className="settings__behavior">
                <div className="settings__wrapper">
                    <div className="settings__left">Designation</div>
                    <div className="settings__right">
                        <select name="Designation" className="settings__select  settings__select--big"
                                aria-label="Designation checkout settings"
                                aria-describedby="settings-select-description" tabIndex="0">
                            <option value="Match Checkout Setting"
                                    aria-describedby="settings-select-match-checkout">Match Checkout Setting
                            </option>
                            <option value="Option 2" aria-describedby="settings-select-option2">Option 2</option>
                            <option value="Option 3" aria-describedby="settings-select-option3">Option 3</option>
                        </select>

                        <div className="aria-description">
                            <span
                                id="settings-select-match-checkout">This option will match the checkout settings.</span>
                            <span id="settings-select-option2">Option 2 description goes here.</span>
                            <span id="settings-select-option3">Option 3 description goes here.</span>
                            <span
                                id="settings-select-description">Select a setting for matching checkout settings.</span>
                        </div>
                    </div>
                </div>
                <div className="settings__wrapper">
                    <div className="settings__left">Goal</div>
                    <div className="settings__right">
                        <input className="settings__input" type="text" defaultValue="$10.00"  id="amount" aria-label="Amount" tabIndex="0"/>
                        <select name="currency" className="settings__select" aria-label="Currency"
                                aria-describedby="settings-select-description" tabIndex="0">
                            <option value="USD" aria-describedby="settings-select-usd">USD</option>
                            <option value="EUR" aria-describedby="settings-select-eur">EUR</option>
                        </select>
                        <div className="aria-description">
                            <span id="settings-select-usd">US Dollar</span>
                            <span id="settings-select-eur">Euro</span>
                            <span id="settings-select-description">Select your preferred currency</span>
                        </div>
                    </div>
                </div>

                <div className="settings__wrapper settings__wrapper--checkbox">
                    <div className="settings__left">Default Amount</div>
                    <div className="settings__right" aria-label="Settings options">
                        <legend className="aria-description">Select a setting:</legend>
                        <div className="settings__radio">
                            <input type="radio" name="radio" value="1" id="radio-1"
                                   aria-describedby="radio-1-description" tabIndex="0"/>
                            <span className="settings__round"></span>
                            <label htmlFor="radio-1">Match Checkout Setting</label>
                            <span className="aria-description" id="radio-1-description">Select this option to match the checkout settings.</span>
                        </div>
                        <div className="settings__radio">
                            <input type="radio" name="radio" value="1" id="radio-2" defaultChecked
                                   aria-describedby="radio-2-description" tabIndex="0"/>
                            <span className="settings__round"></span>
                            <label htmlFor="radio-2">Customize</label>
                            <span className="aria-description" id="radio-2-description">Select this option to customize your settings.</span>
                        </div>
                        <div className="settings__checkbox">
                            <input type="checkbox" name="checkbox" value="1" id="checkbox" defaultChecked
                                   aria-describedby="checkbox-description" tabIndex="0"/>
                            <label htmlFor="checkbox">Allow donor to change default currency</label>
                            <span className="aria-description" id="checkbox-description">Select this option to allow donors to change their default currency.</span>
                        </div>
                    </div>
                </div>

                <div className="settings__wrapper">
                    <div className="settings__left">Border size</div>
                    <div className="settings__right settings__range">
                        {inputSize}
                    </div>
                </div>
                <div className="settings__wrapper settings__wrapper--last">
                    <div className="settings__left">Border radius</div>
                    <div className="settings__right settings__range">
                        {inputRadius}
                    </div>
                </div>

            </form>
            <div className="settings__footer">
                <button className="settings__save" aria-label="Save changes button" tabIndex="0">Save changes</button>
                <button className="settings__cancel" aria-label="Cancel changes button" tabIndex="0">Cancel</button>
            </div>
        </div>
    )
}
