import React from 'react'
import Jumbotron from '../components/olahragaComponents/Jumbotron/Jumbotron'
import OlahragaProgram from '../components/olahragaComponents/olahragaCard/OlahragaProgram'

import { ResepMakanan } from '../data/data'

function OlahragaPage() {
  return (
    <>
		<Jumbotron />
		<OlahragaProgram />
		</>
  )
}

export default OlahragaPage