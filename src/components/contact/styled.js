import styled from 'styled-components';

export const Container = styled.div`
  height:50vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#333;
  `;

export const Card = styled.div`
  width:70vw;
  height: 50vh;
  flex-direction:column;
  display: flex;
  justify-content: center;
  align-items: center;

  h2{
    color:#ddd;
  }

`

export const FormGroup = styled.div`

  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;


  .form__field {
	 font-family: inherit;
	 width: 50vw;
	 border: 0;
	 border-bottom: 2px solid #9b9b9b;
	 outline: 0;
	 font-size: 1.1rem;
	 color: #fff;
	 padding: 7px 0;
	 background: transparent;
	 transition: border-color 0.2s;
  }

 .form__field::placeholder {
	 color: transparent;
  }

 .form__field:placeholder-shown ~ .form__label {
	 font-size: 1.1rem;
	 cursor: text;
	 top: 20px;
  }

 .form__label {
	 position: absolute;
	 top: 0;
	 display: block;
	 transition: 0.2s;
	 font-size: 1rem;
	 color: #9b9b9b;
  }

 .form__field:focus {
	 padding-bottom: 6px;
	 font-weight: 700;
	 border-width: 3px;
	 border-image: linear-gradient(to right, #11998e, #38ef7d);
	 border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
	 position: absolute;
	 top: 0;
	 display: block;
	 transition: 0.2s;
	 font-size: 1rem;
	 color: #11998e;
	 font-weight: 700;
  }





`
export const Btn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top:15px;

`
export const Submit = styled.button`
  width: 100px;
  height: 30px;
  background: linear-gradient(to right, #11998e, #38ef7d);
  border-radius: 50px;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-width: 1.2px;
  display: flex;
  justify-content: center;
  align-items: center;
`
