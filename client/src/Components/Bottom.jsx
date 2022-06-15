import React from 'react'
import '../style/bottom.css'


const Bottom = () => {
    return (
        <div>

            <div className="wrapper">
                <div className="flex">
                    <div className="left">
                        <h1>Download the ModeSens App</h1>
                       <br /> <p>A seamless experience that takes your style to the next level</p>
                        <a href="https://play.google.com/store/apps/details?id=com.modesens.androidapp&hl=en_IN&gl=US" target="_blank" rel="noreferrer">
                        {" "}
                        <br />
                        <br />
                        <button className="btn">DOWNLOAD NOW</button>
                    </a>
                    <br />
                    <br />
                    <div className="ImgDiv1">
                        <img
                            src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png"
                            alt="j"
                           className='image_mobile'
                        />
                    </div>
                </div>
                <div className="right">
                    <h1>Install the ModeSens Browser Extension</h1>
                    <br /><p>Get timely, accurate product information every time you browse</p>
                    <a href="https://addons.mozilla.org/en-GB/firefox/addon/modesens-shopping-assistant/" target="_blank" rel="noreferrer">
                    {" "}
                    <br />
                    <br />
                    <button className="btn">INSTALL NOW</button>
                </a>
                <br />
                <br />
                <div className="ImgDiv2">
                    <img
                        src="https://cdn.modesens.com/static/img/20211109downloadright.png"
                        alt="f"
                        className='image_mobile'
                    />
                </div>
            </div>
        </div>
    </div >
    <p className='botton_p'>When you follow our links to visit a brand or retailer’s website or make a purchase, ModeSens may earn a commission.</p>
    </div >
  )
}

export default Bottom