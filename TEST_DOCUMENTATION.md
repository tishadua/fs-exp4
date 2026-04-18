# Test Documentation

## Overview
This document explains all the tests implemented in this project.

## Test Files

### 1. Button.test.jsx - Unit Tests for Button Component

**Location:** `src/__tests__/Button.test.jsx`

**Tests:**
- ✅ **renders button with correct text**
  - Verifies the button displays the text passed via props
  - Uses `screen.getByText()` to find the button
  - Checks if element is in the document

- ✅ **handles click event**
  - Creates a mock function with `jest.fn()`
  - Simulates button clicks with `fireEvent.click()`
  - Verifies the click handler is called correct number of times

**Key Concepts:**
- Unit testing
- Props testing
- Event handling
- Mock functions

---

### 2. Header.test.jsx - Unit Tests for Header Component

**Location:** `src/__tests__/Header.test.jsx`

**Tests:**
- ✅ **renders header with correct title**
  - Checks if header displays the title prop correctly
  - Tests with "Test Title"

- ✅ **renders header with different title**
  - Ensures component works with different props
  - Tests with "Another Title"

**Key Concepts:**
- Component rendering
- Props validation
- Text content testing

---

### 3. Form.test.jsx - Integration Tests for Form Component

**Location:** `src/__tests__/Form.test.jsx`

**Tests:**
- ✅ **renders form with input fields**
  - Verifies all form elements are present
  - Checks for name input, email input, and submit button

- ✅ **fills input fields and submits form successfully**
  - Uses `userEvent.type()` to simulate typing
  - Verifies input values are updated
  - Submits form and checks for success message

- ✅ **shows validation error when name is empty**
  - Submits form without filling name field
  - Asserts "Name is required" error appears

- ✅ **shows validation error when email is empty**
  - Fills name but leaves email empty
  - Asserts "Email is required" error appears

- ✅ **shows validation error when email is invalid**
  - Enters invalid email format
  - Asserts "Email is invalid" error appears

- ✅ **clears form after successful submission**
  - Submits valid form
  - Verifies input fields are cleared

**Key Concepts:**
- Form testing
- User interaction simulation
- Validation testing
- Async testing with `findByText()`
- State management testing

---

### 4. Dashboard.test.jsx - Snapshot Tests for Dashboard Component

**Location:** `src/__tests__/Dashboard.test.jsx`

**Snapshot Tests:**
- ✅ **matches snapshot for loading state**
  - Captures component structure when loading
  - Ensures UI consistency over time

- ✅ **matches snapshot for error state**
  - Captures error state UI
  - Detects unintended UI changes

- ✅ **matches snapshot for empty state**
  - Captures empty data state
  - Maintains consistent empty state UI

- ✅ **matches snapshot for loaded state with data**
  - Captures component with data
  - Tests with sample card data

**Functional Tests:**
- ✅ **renders loading state correctly**
  - Verifies "Loading..." text appears

- ✅ **renders error state correctly**
  - Verifies "Error loading data!" appears

- ✅ **renders empty state correctly**
  - Verifies "No data available" appears

- ✅ **renders loaded state with data correctly**
  - Verifies Dashboard title appears
  - Checks if all cards are rendered
  - Tests with multiple data items

**Key Concepts:**
- Snapshot testing
- State-based rendering
- Complex component testing
- Data-driven testing

---

## Running Tests

### Run all tests:
```bash
npm test
```

### Run specific test file:
```bash
npm test Button.test.jsx
```

### Run tests in watch mode:
```bash
npm run test:watch
```

### Update snapshots:
```bash
npm test -- -u
```

### View test coverage:
```bash
npm test -- --coverage
```

---

## Test Results Summary

| Component | Test Type | Tests | Status |
|-----------|-----------|-------|--------|
| Button | Unit | 2 | ✅ Pass |
| Header | Unit | 2 | ✅ Pass |
| Form | Integration | 6 | ✅ Pass |
| Dashboard | Snapshot | 8 | ✅ Pass |
| **Total** | | **18** | ✅ **All Pass** |

---

## Testing Best Practices Used

1. **Descriptive Test Names**
   - Each test clearly describes what it's testing

2. **Arrange-Act-Assert Pattern**
   - Setup → Action → Verification

3. **User-Centric Testing**
   - Tests simulate real user interactions
   - Uses `userEvent` for realistic typing

4. **Accessibility**
   - Uses `getByLabelText()` and `getByRole()`
   - Follows accessibility best practices

5. **Isolation**
   - Each test is independent
   - No shared state between tests

6. **Snapshot Testing**
   - Used for complex components
   - Catches unintended UI changes

---

## Common Testing Patterns

### Finding Elements
```javascript
// By text
screen.getByText(/Click Me!/i)

// By label
screen.getByLabelText(/Name:/i)

// By role
screen.getByRole('button', { name: /Submit/i })
```

### User Interactions
```javascript
// Click
fireEvent.click(button)

// Type
await userEvent.type(input, 'text')
```

### Assertions
```javascript
// Element exists
expect(element).toBeInTheDocument()

// Has value
expect(input).toHaveValue('text')

// Function called
expect(mockFn).toHaveBeenCalledTimes(1)
```

### Async Testing
```javascript
// Wait for element
expect(await screen.findByText(/Success/i)).toBeInTheDocument()
```

---

## Troubleshooting Tests

### Test Fails: "Unable to find element"
- Check if element is rendered
- Verify text/label matches exactly
- Use `screen.debug()` to see rendered output

### Test Fails: "Snapshot mismatch"
- Review changes in snapshot diff
- Update snapshot if change is intentional: `npm test -- -u`

### Test Fails: "Not wrapped in act()"
- Use `await` with async operations
- Use `findBy` queries for async elements

---

## Additional Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
