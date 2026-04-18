# React Testing Experiment - Front-End Testing with Jest and React Testing Library

This project demonstrates front-end testing using Jest and React Testing Library, including unit tests, form validation tests, and snapshot tests.

## 🎯 Experiment Objectives

### a. Unit Testing
- Test functional React components (Button, Header)
- Verify correct text rendering
- Test click event handlers

### b. Form Testing
- Fill input fields programmatically
- Trigger form submission
- Assert validation messages
- Verify success messages

### c. Snapshot Testing
- Test complex Dashboard component
- Test different states: loading, empty, error, data loaded
- Ensure snapshots remain consistent

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tishadua/fs-exp4.git
cd fs-exp4
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧪 Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in watch mode:
```bash
npm run test:watch
```

### Update snapshots:
```bash
npm test -- -u
```

## 📁 Project Structure

```
fs-exp4/
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Simple button component
│   │   ├── Button.css
│   │   ├── Header.jsx          # Header component
│   │   ├── Header.css
│   │   ├── Form.jsx            # Form with validation
│   │   ├── Form.css
│   │   ├── Dashboard.jsx       # Complex component with states
│   │   └── Dashboard.css
│   ├── __tests__/
│   │   ├── Button.test.jsx     # Unit tests for Button
│   │   ├── Header.test.jsx     # Unit tests for Header
│   │   ├── Form.test.jsx       # Form validation tests
│   │   └── Dashboard.test.jsx  # Snapshot tests
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── jest.config.js
├── jest.setup.js
├── vite.config.js
├── vercel.json
├── package.json
└── README.md
```

## 🧩 Components

### 1. Button Component
- Simple functional component
- Accepts `text` and `onClick` props
- Tests verify rendering and click handling

### 2. Header Component
- Displays a title
- Tests verify correct text rendering

### 3. Form Component
- Input fields for name and email
- Client-side validation
- Success/error messages
- Tests cover:
  - Field filling
  - Form submission
  - Validation errors
  - Success messages

### 4. Dashboard Component
- Complex component with multiple states:
  - **Loading**: Shows loading message
  - **Error**: Shows error message
  - **Empty**: Shows no data message
  - **Loaded**: Displays card list
- Snapshot tests for each state

## 📝 Test Coverage

### Unit Tests (Button & Header)
- ✅ Renders with correct text
- ✅ Handles click events
- ✅ Props are passed correctly

### Form Tests
- ✅ Renders all form fields
- ✅ Fills input fields
- ✅ Triggers form submission
- ✅ Shows validation errors (empty fields)
- ✅ Shows validation errors (invalid email)
- ✅ Shows success message
- ✅ Clears form after submission

### Snapshot Tests (Dashboard)
- ✅ Loading state snapshot
- ✅ Error state snapshot
- ✅ Empty state snapshot
- ✅ Loaded state snapshot
- ✅ Consistent snapshots over time

## 🌐 Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Environment Configuration

The project is pre-configured for Vercel with `vercel.json`:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Jest** - Testing framework
- **React Testing Library** - React component testing
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/jest-dom** - Custom Jest matchers

## 📚 Learning Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 👨‍💻 Author

Tisha Dua

## 📄 License

This project is for educational purposes.
