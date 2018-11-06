import React from 'react'

export default (props) => {
    const { credit } = props;
    return (
        <dir>
            <ul>
                <li> - <b>Value Credit:</b> {credit.valueCredit} </li>
                <li> - <b>Interest:</b>     {credit.interest}%</li>
                <li> - <b>Value Paid:</b>   {credit.valuePaid}</li>
                <li> - <b>Pay Daily:</b>    {credit.payDaily}</li>
                <li> - <b>Paid:</b>       {credit.percentagePaid}%</li>
            </ul>
            <div className="progress">
                <div className="determinate" style={{ width: `${credit.percentagePaid}%` }}></div>
            </div>
        </dir>
    )
}
