function Results({questions,selected}){

    let score=0;
    selected.forEach((q, i) => {
    if (questions[i].answer === q) {
      score++;
    }
  });
    return(
        <>
            <div className="box">
                <p>Your Score is {score}/{questions.length}</p>
            </div>
        </>
    )
}
export default Results