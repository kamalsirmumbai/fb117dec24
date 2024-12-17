import { useState,  useRef } from "react";

function Feedback()
{
	const rName = useRef();

	const [name, setName] = useState("");
	const [feedback, setFeedback] = useState("excellent");
	const [msg, setMsg] = useState("");

	const hName = (event) => { setName(event.target.value); }
	const hFeedback = (event) => { setFeedback(event.target.value); }

	const show = (event) => {
		event.preventDefault();

		if (name === "")
		{
			alert("name cannot be empty");
			setMsg("");
			rName.current.focus();
			return;
		}

		if (name.trim() === "")
		{
			alert("name cannot be blank spaces");
			setName("");
			setMsg("");
			rName.current.focus();
			return;
		}

		if (! name.match(/^[A-Za-z ]+$/))
		{
			alert("name shud contain only alphabets");
			setName("");
			setMsg("");
			rName.current.focus();
			return;
		}

		let ans = "name = " + name + " feedback " + feedback;
		setMsg(ans);
	}

	return(
		<>
		<center>
			<h1> Feedback Please </h1>
			<form onSubmit={ show }>
			<input type="text"	placeholder="enter ur name" 	ref={ rName }
			onChange = { hName } 	value={ name }/>
			<br/><br/>
			<input type="radio"	name="f"	value="excellent"
			defaultChecked={true} onChange={ hFeedback}/>Excellent
			<input type="radio"	name="f"	value="superb"
			onChange={ hFeedback}/>Superb
			<input type="radio"	name="f"	value="good"
			onChange={ hFeedback}/>Good
			<br/><br/>
			<input type="submit" />
			</form>
			<h2> { msg } </h2>
		</center>
		</>
	);
}
export default Feedback;






