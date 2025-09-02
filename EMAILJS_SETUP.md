# EmailJS Setup Guide for Sayid Care Contact Form

## How to Make the Contact Form Actually Work

The contact form is set up to use EmailJS, which allows you to send emails directly from the frontend without a backend server.

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - Sayid Care

Hello,

You have received a new message from the Sayid Care website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Please respond to this inquiry as soon as possible.

Best regards,
Sayid Care Website
```

4. Note down your **Template ID**

### Step 4: Get User ID
1. Go to "Account" > "General"
2. Find your **User ID** (also called Public Key)

### Step 5: Update the Code
In `src/components/Contact.js`, replace these placeholders:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID from Step 2
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID from Step 3
  templateParams,
  'YOUR_USER_ID'        // Replace with your User ID from Step 4
);
```

### Example:
```javascript
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  templateParams,
  'user_def456'
);
```

### Step 6: Test the Form
1. Run your website: `npm start`
2. Fill out the contact form
3. Check your email inbox for the message

## Where Messages Go
- Messages will be sent to the email address you configured in your EmailJS service
- You should set this to `contact@sayidcare.com` or your preferred contact email
- The form automatically includes all the user's information (name, email, phone, message)

## Free Plan Limits
- EmailJS free plan allows 200 emails per month
- For higher volume, consider upgrading to a paid plan

## Troubleshooting
- Make sure all IDs are correct (Service ID, Template ID, User ID)
- Check your email service connection in EmailJS dashboard
- Verify your template variables match the code
- Check browser console for error messages 