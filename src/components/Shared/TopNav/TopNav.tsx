import React from 'react';
import { FaEnvelope, FaUserAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <>
      <div className="container mx-auto hidden sm:block">
        <nav className='py-1 px-2 flex justify-between items-center'>
          <ul>
            <li className='inline-block mr-2'>
              <span>
                <FaEnvelope className='inline-block mr-1'/>
              </span> <span className='text-sm'>Hello@gmail.com</span>
            </li>
            |
            <li className='inline-block ml-2'>
              <p className='text-sm'>Free Shipping for all Order of $99</p>
            </li>
          </ul>
          <ul className='flex items-center'>
            <li className='inline-block mr-2'>
              <ul className='flex items-center'>
                <li className='inline-block mx-2'>
                  <Link to="#">
                    <FaFacebookF/>
                  </Link>
                </li>
                <li className='inline-block mx-2'>
                  <Link to="#">
                    <FaTwitter/>
                  </Link>
                </li>
                <li className='inline-block mx-2'>
                  <Link to="#">
                    <FaLinkedinIn/>
                  </Link>
                </li>
                <li className='inline-block mx-2'>
                  <Link to="#">
                    <FaPinterestP/>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='inline-block mx-2'>
              <select data-placeholder="Choose a Language..." className='bg-transparent outline-none'>
                <option value="AF">Afrikaans</option>
                <option value="SQ">Albanian</option>
                <option value="AR">Arabic</option>
                <option value="HY">Armenian</option>
                <option value="EU">Basque</option>
                <option value="BN">Bengali</option>
                <option value="BG">Bulgarian</option>
                <option value="CA">Catalan</option>
                <option value="KM">Cambodian</option>
                <option value="ZH">Chinese (Mandarin)</option>
                <option value="HR">Croatian</option>
                <option value="CS">Czech</option>
                <option value="DA">Danish</option>
                <option value="NL">Dutch</option>
                <option selected value="EN">English</option>
                <option value="ET">Estonian</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finnish</option>
                <option value="FR">French</option>
                <option value="KA">Georgian</option>
                <option value="DE">German</option>
                <option value="EL">Greek</option>
                <option value="GU">Gujarati</option>
                <option value="HE">Hebrew</option>
                <option value="HI">Hindi</option>
                <option value="HU">Hungarian</option>
                <option value="IS">Icelandic</option>
                <option value="ID">Indonesian</option>
                <option value="GA">Irish</option>
                <option value="IT">Italian</option>
                <option value="JA">Japanese</option>
                <option value="JW">Javanese</option>
                <option value="KO">Korean</option>
                <option value="LA">Latin</option>
                <option value="LV">Latvian</option>
                <option value="LT">Lithuanian</option>
                <option value="MK">Macedonian</option>
                <option value="MS">Malay</option>
                <option value="ML">Malayalam</option>
                <option value="MT">Maltese</option>
                <option value="MI">Maori</option>
                <option value="MR">Marathi</option>
                <option value="MN">Mongolian</option>
                <option value="NE">Nepali</option>
                <option value="NO">Norwegian</option>
                <option value="FA">Persian</option>
                <option value="PL">Polish</option>
                <option value="PT">Portuguese</option>
                <option value="PA">Punjabi</option>
                <option value="QU">Quechua</option>
                <option value="RO">Romanian</option>
                <option value="RU">Russian</option>
                <option value="SM">Samoan</option>
                <option value="SR">Serbian</option>
                <option value="SK">Slovak</option>
                <option value="SL">Slovenian</option>
                <option value="ES">Spanish</option>
                <option value="SW">Swahili</option>
                <option value="SV">Swedish </option>
                <option value="TA">Tamil</option>
                <option value="TT">Tatar</option>
                <option value="TE">Telugu</option>
                <option value="TH">Thai</option>
                <option value="BO">Tibetan</option>
                <option value="TO">Tonga</option>
                <option value="TR">Turkish</option>
                <option value="UK">Ukrainian</option>
                <option value="UR">Urdu</option>
                <option value="UZ">Uzbek</option>
                <option value="VI">Vietnamese</option>
                <option value="CY">Welsh</option>
                <option value="XH">Xhosa</option>
              </select>
            </li>
            <li className='inline-block ml-2'>
              <FaUserAlt className='inline-block mr-2'/>
              <Link to="#">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TopNav;
