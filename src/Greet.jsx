/* eslint-disable react/prop-types */
export default function Greet({ name }) {
  return <div>Hello {name ? name : 'Guest'}</div>;
}
