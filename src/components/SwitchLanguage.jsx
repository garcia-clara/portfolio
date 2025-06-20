import React from 'react'

export const SwitchLanguage = () => {
  return (
    <button className="btn w-10 rounded-lg">
        <label className="swap swap-flip">
          <input type="checkbox" className="lang-controller" value="fr" />
          <p
            className="swap-off h-7 w-7 fill-current flex items-center justify-center"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            EN
          </p>
    
          <p
            className="swap-on h-7 w-7 fill-current flex items-center justify-center"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            FR
          </p>
        </label>
        </button>
  )
}
