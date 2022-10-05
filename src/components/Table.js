import React from 'react';

export default function Table(props) {
  let sample;
  // your code here
  if (props.data.length > 0) {
    sample = props.data[0];
  }
  let headers;
  if (sample) {
    headers = Object.keys(sample);
  }
  console.log(headers);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((h) => (
            <td>{h}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((d) => {
          return (
            <tr>
              {headers.map((h) => {
                return <td>{d[h]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
