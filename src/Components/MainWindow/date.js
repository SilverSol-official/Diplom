const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



export const GetDate = () => {
  const d = new Date();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let date = d.getDate();
  let res = `${date} ${month} ${year}`;
  return res;
}