interface Movie {
  classification: Classification;
  duration: number,
}

interface Classification {
  adult: boolean,
  age: number,
  default: boolean,
  description: string,
  id: string,
  name: string,
  numerical_id: number,
  type: string,
}

interface Score {
  amount_of_votes: number,
  formatted_amount_of_votes: string
  score: number,
}