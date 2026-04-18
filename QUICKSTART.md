# 🚀 Quick Start Guide

## For Students - Step by Step Instructions

### Step 1: Install Node.js
1. Download Node.js from [https://nodejs.org](https://nodejs.org)
2. Install version 16 or higher
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Clone the Repository
```bash
git clone https://github.com/tishadua/fs-exp4.git
cd fs-exp4
```

### Step 3: Install Dependencies
```bash
npm install
```
This will install all required packages (React, Jest, Testing Library, etc.)

### Step 4: Run the Application
```bash
npm run dev
```
- Open browser and go to: http://localhost:5173
- You should see the React Testing Experiment app

### Step 5: Run Tests
```bash
npm test
```
- All 18 tests should pass ✅
- You'll see test results in the terminal

### Step 6: Explore the Code

#### Components (src/components/):
- **Button.jsx** - Simple button component
- **Header.jsx** - Header with title
- **Form.jsx** - Form with validation
- **Dashboard.jsx** - Complex component with states

#### Tests (src/__tests__/):
- **Button.test.jsx** - Unit tests for Button
- **Header.test.jsx** - Unit tests for Header
- **Form.test.jsx** - Form validation tests
- **Dashboard.test.jsx** - Snapshot tests

### Step 7: Deploy to Vercel

#### Option A: Using Vercel Website (Easiest)
1. Go to [https://vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import `tishadua/fs-exp4`
5. Click "Deploy"
6. Done! Your app is live 🎉

#### Option B: Using Command Line
```bash
npm install -g vercel
vercel login
vercel
```

---

## What This Project Demonstrates

### ✅ Part A: Unit Testing
- Tests Button component for text rendering
- Tests Button component for click events
- Tests Header component for title display

### ✅ Part B: Form Testing
- Fills input fields programmatically
- Triggers form submission
- Validates error messages (empty fields, invalid email)
- Validates success messages

### ✅ Part C: Snapshot Testing
- Tests Dashboard in loading state
- Tests Dashboard in error state
- Tests Dashboard in empty state
- Tests Dashboard with loaded data
- Ensures UI consistency over time

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm test -- -u` | Update snapshots |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Project Structure Explained

```
fs-exp4/
├── src/
│   ├── components/          # React components
│   │   ├── Button.jsx       # Simple button
│   │   ├── Header.jsx       # Page header
│   │   ├── Form.jsx         # Form with validation
│   │   └── Dashboard.jsx    # Complex component
│   ├── __tests__/           # Test files
│   │   ├── Button.test.jsx
│   │   ├── Header.test.jsx
│   │   ├── Form.test.jsx
│   │   └── Dashboard.test.jsx
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── jest.config.js           # Jest configuration
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment config
└── package.json             # Dependencies
```

---

## Understanding the Tests

### Unit Test Example (Button):
```javascript
test('renders button with correct text', () => {
  render(<Button text="Click Me!" onClick={() => {}} />);
  const buttonElement = screen.getByText(/Click Me!/i);
  expect(buttonElement).toBeInTheDocument();
});
```
**What it does:** Checks if button shows the right text

### Form Test Example:
```javascript
test('shows validation error when email is invalid', async () => {
  const user = userEvent.setup();
  render(<Form />);
  
  await user.type(nameInput, 'John Doe');
  await user.type(emailInput, 'invalid-email');
  fireEvent.click(submitButton);
  
  expect(await screen.findByText(/Email is invalid/i)).toBeInTheDocument();
});
```
**What it does:** Tests form validation for invalid email

### Snapshot Test Example:
```javascript
test('matches snapshot for loading state', () => {
  const { container } = render(<Dashboard status="loading" data={[]} />);
  expect(container).toMatchSnapshot();
});
```
**What it does:** Saves component structure and detects changes

---

## Troubleshooting

### Problem: Tests fail
**Solution:** 
```bash
npm install
npm test
```

### Problem: App doesn't start
**Solution:**
```bash
rm -rf node_modules
npm install
npm run dev
```

### Problem: Snapshot tests fail
**Solution:**
```bash
npm test -- -u
```
(Updates snapshots if changes are intentional)

### Problem: Port already in use
**Solution:**
- Close other apps using port 5173
- Or Vite will suggest another port

---

## Learning Resources

- **Jest:** [https://jestjs.io/](https://jestjs.io/)
- **React Testing Library:** [https://testing-library.com/react](https://testing-library.com/react)
- **React:** [https://react.dev/](https://react.dev/)
- **Vite:** [https://vitejs.dev/](https://vitejs.dev/)
- **Vercel:** [https://vercel.com/docs](https://vercel.com/docs)

---

## Need Help?

1. Check README.md for detailed documentation
2. Check TEST_DOCUMENTATION.md for test explanations
3. Check DEPLOYMENT.md for deployment help
4. Read error messages carefully
5. Google the error message
6. Check Stack Overflow

---

## Tips for Success

✅ Run tests frequently while developing
✅ Read test output carefully
✅ Use `screen.debug()` to see what's rendered
✅ Start with simple tests, then add complex ones
✅ Keep tests focused on one thing
✅ Write descriptive test names
✅ Test user behavior, not implementation

---

## Submission Checklist

- [ ] Code pushed to GitHub
- [ ] All tests passing (18/18)
- [ ] App deployed on Vercel
- [ ] README.md reviewed
- [ ] Screenshots taken (optional)
- [ ] Deployment URL noted

---

**Good luck with your experiment! 🎉**
