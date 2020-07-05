import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-regular-svg-icons'

const PageNotFound = () => (
    <div style={MainStyle}>
        <div style={TextStyle}>
            Page not Found
        </div>
        <div>
            <FontAwesomeIcon icon={faSadCry} size='3x' />
        </div>
    </div>
)

const MainStyle = {
    color: '#5a5a5a',
    textAlign: 'center',
    fontSize: '2em',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 100%',
    height: '100%',
    width: '100%'
}

const TextStyle = {
    margin: '1em 0'
}

export default PageNotFound;