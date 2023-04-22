import './settings.scss'
import {useState} from "react";

export const Settings = () => {

    const [inputValue, setInputValue] = useState([2,15])

    const inputSize = <>
        <input type="range" id="size" name="size" min="0" max="3" defaultValue="2" onInput={handleInputChange}/>
        <output>{inputValue[0]}</output><span>px</span>
    </>

    const inputRadius = <>
        <input type="range" id="size" name="radius" min="0" max="23" defaultValue="15" onInput={handleInputChange}/>
        <output>{inputValue[1]}</output><span>px</span>
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


    return (
        <div className="settings element">
            <div className="settings__menu">
                <div className="settings__item active" tabIndex="0">Behavior</div>
                <div className="settings__item" tabIndex="0">Appearance</div>
                <div className="settings__item" tabIndex="0">Custom Fields</div>
                <div className="settings__item" tabIndex="0">Questions</div>
                <div className="settings__item" tabIndex="0">URL Control</div>
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
                        <input className="settings__input" type="text" defaultValue="$10.00"/>
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
                            <span className="settings__round"></span>
                            <label htmlFor="radio-1">Match Checkout Setting</label>
                        </div>
                        <div className="settings__radio">
                            <input type="radio" name="radio" value="1" id="radio-2" defaultChecked/>
                            <span className="settings__round"></span>
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
                <button className="settings__save">Save changes</button>
                <button className="settings__cancel">Cancel</button>
            </div>
        </div>
    )
}
