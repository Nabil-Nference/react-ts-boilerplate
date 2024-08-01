### README.md

```markdown
# React TS Boilerplate

## Project Setup

This project is a React application set up using TypeScript. It uses Tailwind CSS for styling and follows the atomic design pattern for organizing components. Here's how to set it up and understand its structure.

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nabil-Nference/react-ts-boilerplate
   cd my-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

This will start the application on `http://localhost:3000`.

## Project Structure

The project follows a well-organized structure adhering to the atomic design pattern. Here’s a brief overview:

```
my-app
├── node_modules
├── public
├── src
│   ├── api
│   │   └── index.ts         # Axios instance and utility functions
│   ├── components
│   │   ├── atoms            # Basic building blocks of the UI
│   │   │   ├── Button.tsx
│   │   │   ├── Title.tsx
│   │   │   └── Text.tsx
│   │   ├── molecules        # Groups of atoms working together
│   │   │   └── Card.tsx
│   │   └── organisms        # Complex UI components made up of molecules and atoms
│   │       ├── Header.tsx
│   │       └── CardList.tsx
│   ├── pages                # Page components
│   │   └── Home.tsx
│   ├── index.css            # Global CSS including Tailwind imports
│   ├── index.tsx            # Entry point of the React application
│   └── ...
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
├── package.json             # npm configuration and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── typedoc.json             # TypeDoc configuration for generating documentation
└── docs                     # Generated documentation files
```


## How the Current App Works

The current app is a simple application that fetches a list of dog breeds from an API and displays them using various components following the atomic design pattern.

**Key Components:**
- `Button`: A reusable button component.
- `Card`: Displays information about a dog breed.
- `Header`: A header component for the page.
- `CardList`: A list of `Card` components.

**Page:**
- `Home`: The main page component that fetches data and renders the `Header`, `Button`, and `CardList` components.

### Atomic Design Pattern

The atomic design pattern organizes components into a hierarchy of increasing complexity:
- **Atoms**: Basic building blocks (e.g., Button, Title, Text).
- **Molecules**: Groups of atoms working together (e.g., Card).
- **Organisms**: Complex components made up of molecules and atoms (e.g., Header, CardList).
- **Pages**: Components that assemble organisms to form a complete page (e.g., Home).

### Examples of Using Atoms, Molecules, and Organisms

#### Atoms

Atoms are the basic building blocks of the UI. They are simple components that can't be broken down further.

**Example: Button Component**

```typescript
import React from 'react'

type ButtonProps = {
  /**
   * The label of the button
   */
  label: string
  /**
   * Function to call on button click
   */
  onClick: () => void
}

/**
 * Button component
 * @param label - The label of the button
 * @param onClick - Function to call on button click
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 mb-4 rounded"
    onClick={onClick}
  >
    {label}
  </button>
)
```

#### Molecules

Molecules are groups of atoms working together to form a more complex UI component.

**Example: Card Component**

```typescript
import React from 'react'
import { Title } from '../atoms/Title'
import { Text } from '../atoms/Text'

type CardProps = {
  title: string
  content: string
}

/**
 * Card component
 * @param title - The title of the card
 * @param content - The content of the card
 */
export const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border p-4 rounded shadow-lg mb-4 bg-white">
    <Title text={title} />
    <Text content={content} />
  </div>
)
```

#### Organisms

Organisms are complex UI components made up of molecules and atoms.

**Example: Header Component**

```typescript
import React from 'react'
import { Title } from '../atoms/Title'

type HeaderProps = {
  title: string
}

/**
 * Header component
 * @param title - The title to display in the header
 */
export const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="bg-gray-800 text-white p-4 mb-4 rounded">
    <Title text={title} />
  </header>
)
```

**Example: CardList Component**

```typescript
import React from 'react'
import { Card } from '../molecules/Card'

type CardListProps = {
  cards: { title: string, content: string }[]
}

/**
 * CardList component
 * @param cards - The list of cards to display
 */
export const CardList: React.FC<CardListProps> = ({ cards }) => (
  <div className="space-y-4">
    {cards.map((card, index) => (
      <Card key={index} title={card.title} content={card.content} />
    ))}
  </div>
)
```

### Page Component

Pages assemble organisms to form a complete page.

**Example: Home Page**

```typescript
import React, { useState, useEffect } from 'react'
import { Button } from '../components/atoms/Button'
import { Header } from '../components/organisms/Header'
import { CardList } from '../components/organisms/CardList'
import { get } from '../api'

const Home = () => {
  const [breeds, setBreeds] = useState<string[]>([])

  const fetchData = async () => {
    try {
      const data = await get<{ message: { [key: string]: string[] }, status: string }>('/breeds/list/all')
      const breedList = Object.keys(data.message)
      setBreeds(breedList)
      console.log(breedList)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const cards = breeds.map(breed => ({ title: breed, content: 'Breed info goes here.' }))

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header title="Home Page" />
      <Button label="Fetch Dog Breeds" onClick={fetchData} />
      <CardList cards={cards} />
    </div>
  )
}

export default Home
```

## Generating Documentation

The project uses TypeDoc to generate documentation for the TypeScript code. The configuration for TypeDoc is in `typedoc.json`.

To generate documentation, run:

```bash
npm run generate-docs
```

This will generate documentation in the `docs` directory.

## Conclusion

This project serves as a good starting point for building a well-structured React application using TypeScript and Tailwind CSS, following the atomic design pattern. It includes a basic setup for making API calls and demonstrates how to organize and style components effectively.
```

