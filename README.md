# Multi-step Form (Frontend Mentor Challenge)

This project is a multi-step form application built with **React** as part of a [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). The project involves creating an interactive form where users can select plans, add-ons, and review their choices before submission. It showcases the use of state management, routing, and localStorage for persisting data between steps.

## Features

- **Multi-step navigation**: Users can progress through different steps to complete the form, with the ability to go back and modify inputs.
- **Plan selection**: Users can choose between different pricing plans (monthly or yearly) and see corresponding prices.
- **Add-ons**: Additional services can be selected, which dynamically update the total cost.
- **Form validation**: The form ensures required fields are filled before proceeding to the next step.
- **Local storage**: Selections are stored in the browser's local storage, ensuring that data is preserved even when navigating between steps or refreshing the page.

## Pages/Steps

1. **Personal Info**: The user provides their name, email, and phone number.
2. **Select Plan**: The user selects a plan (Arcade, Advanced, or Pro) and chooses between monthly or yearly billing.
3. **Add-ons**: Optional add-ons can be selected to enhance the plan.
4. **Review & Confirm**: The user reviews their selections, and the total price is calculated before final confirmation.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For navigation between steps.
- **Tailwind CSS**: For styling the application.
- **LocalStorage**: For storing user selections between navigation steps.
- **Frontend Mentor**: Challenge used for design inspiration and project requirements.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/multi-step-form.git
   ```
2. Navigate to the project directory:
   cd multi-step-form
3. Install the dependencies:
   npm install
4. Start the development server
   npm start

# Links

https://www.frontendmentor.io/

## Live site

https://multi-step-form-zeta-ecru.vercel.app/
