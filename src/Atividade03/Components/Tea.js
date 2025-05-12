function Cup({ guest }) {
    return <p>Tea cup for guest #{guest}</p>
}

// export default function TeaSet(){
//     return(
//         <>
//             <h2>Tea Set</h2>
//             <Cup guest={1}/>
//             <Cup guest={2}/>
//             <Cup guest={3}/>
//         </>
//     )
// }
export default function TeaSet(){
    let cups = [];
    for (let i = 1; i <= 5; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}