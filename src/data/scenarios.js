export const scenarios = [
  {
    id: 1,
    title: "Scenario 1",
    systemLog: [
      "[20/10/2025 10:05:05] LOGIN FAILED – user: admin (wrong password)",
      "[20/10/2025 10:05:07] LOGIN FAILED – user: admin (wrong password)",
      "[20/10/2025 10:05:10] LOGIN SUCCESS – user: admin"
    ],
    configFile: `password = admin123
failed_login_limit = 10
two_factor_auth = off`,
    questions: [
      {
        id: 1,
        text: "What is strange about this login pattern?",
        marks: 5,
        answer: "The attacker tried a few passwords and got in easily after 2–3 attempts.",
        criteria: [
          "Identified rapid login attempts",
          "Recognized successful brute force attack",
          "Noted the quick success after failures"
        ]
      },
      {
        id: 2,
        text: "What made the system easy to break into?",
        marks: 10,
        answer: "The admin password was too simple ('admin123') and there was no 2-factor authentication.",
        criteria: [
          "Identified weak password (admin123)",
          "Noted lack of 2FA",
          "Mentioned high failed_login_limit",
          "Explained security vulnerabilities"
        ]
      },
      {
        id: 3,
        text: "What should be changed to make it safe?",
        marks: 10,
        answer: "Use a strong password and enable two-factor authentication with fewer allowed login attempts.",
        criteria: [
          "Recommended strong password policy",
          "Suggested enabling 2FA",
          "Mentioned lowering failed login limit",
          "Provided complete security strategy"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Scenario 2",
    systemLog: [
      "[24/10/2025 10:12:44] LOGIN SUCCESS – user: techsupport",
      "[24/10/2025 10:13:25] FILE CREATED – /system/patch_update.exe",
      "[24/10/2025 10:14:05] FILE EXECUTED – /system/patch_update.exe",
      "[24/10/2025 10:14:45] SYSTEM ERROR – unauthorized access detected"
    ],
    configFile: `software_install = enabled
file_verification = off
admin_approval_required = false`,
    questions: [
      {
        id: 1,
        text: "What suspicious thing happened?",
        marks: 5,
        answer: "A user created and ran a fake 'update' file that caused a system error.",
        criteria: [
          "Identified malicious file creation",
          "Recognized unauthorized execution",
          "Noted the system error result"
        ]
      },
      {
        id: 2,
        text: "Which settings made it possible?",
        marks: 10,
        answer: "Software installation was allowed, file verification was off, and no admin approval was needed.",
        criteria: [
          "Identified software_install = enabled",
          "Noted file_verification = off",
          "Mentioned admin_approval_required = false",
          "Explained security gaps"
        ]
      },
      {
        id: 3,
        text: "How can the IT team prevent this?",
        marks: 10,
        answer: "Require admin approval for installations, enable file verification, and restrict executable file creation.",
        criteria: [
          "Recommended admin approval requirement",
          "Suggested enabling file verification",
          "Mentioned restricting executable creation",
          "Provided comprehensive prevention plan"
        ]
      }
    ]
  }
];