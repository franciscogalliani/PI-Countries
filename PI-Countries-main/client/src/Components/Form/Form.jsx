import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { MainContainer, FormContainer, InputContainer, Input, Select, Label, ButtonsContainer, ButtonsForm } from './Form-styles'

const Form = () => {

  const { idCountry } = useParams()

  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [season, setSeason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !difficulty || !duration || !season) {
      alert('You must fill all the inputs');
      return;
    }

    axios.post('http://localhost:3001/activities', {
        countryID: idCountry,
        name,
        difficulty,
        duration,
        season
    })
    alert(`New Activity created: ${name}`)

    setName('');
    setDifficulty('');
    setDuration('');
    setSeason('');
  };

  return (
    <MainContainer>
    <FormContainer onSubmit={handleSubmit}>
      <h2>{`Add new activity (${idCountry})`}</h2>
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="difficulty">Difficulty</Label>
        <Select
          id="difficulty"
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option value="">Select a Difficulty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="duration">Duration</Label>
        <Input
          type="number"
          id="duration"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="season">Season</Label>
        <Select
          id="season"
          value={season}
          onChange={(event) => setSeason(event.target.value)}
        >
          <option value="">Select a Season</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </Select>
      </InputContainer>
      <ButtonsContainer>
      <ButtonsForm type="submit">Send</ButtonsForm>
      <Link to={`/countries/${idCountry}`}><ButtonsForm>Return</ButtonsForm></Link>
      </ButtonsContainer>
    </FormContainer>
    </MainContainer>
  );
}

export default Form;