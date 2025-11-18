function Hello(){

  let myname='prashant';
  let fullname=()=>{
    return 'prashant jain';
  }
  return <div>
     hello this is { fullname}. and my first name is {myname}
  </div>
}
export default Hello;
