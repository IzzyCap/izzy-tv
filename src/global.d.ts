interface Movie {
  classification: Classification;
  duration: number;
  higlighted_score: Score;
  id: string;
  images: Image;
  label: string;
  labels: any;
  numerical_id: number;
  rating: Rating;
  short_plot: string;
  title: string;
  type: string;
  year: number;
}

interface Classification {
  adult: boolean;
  age: number;
  default: boolean;
  description: string;
  id: string;
  name: string;
  numerical_id: number;
  type: string;
}

interface Score {
  amount_of_votes: number;
  formatted_amount_of_votes: string;
  score: number;
}

interface Image {
  artwork: string;
  has_sponsored_snapshot: false;
  ribbons: any;
  snapshot: string;
  standard_artwork: string;
}

interface Rating {
  average: number;
  scale: number;
}
