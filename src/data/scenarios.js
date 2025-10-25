export const scenarios = [
  {
    id: 1,
    title: "Scenario 1",
    systemLog: [
      "[20/10/2025 08:00:00] ANTIVIRUS ALERT – Database outdated (last update: 10 days ago)",
      "[20/10/2025 08:15:20] FILE SCANNED – infected_file.exe → No threat detected",
      "[20/10/2025 08:16:05] SYSTEM INFECTED – malware_activity_detected"
    ],
    configFile: `auto_update = off
scan_frequency = weekly
threat_notification = disabled`,
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
      "On Terminal A – HR Manager’s System",
      "[26/10/2025 12:22:44] LOGIN SUCCESS – user: hr_manager",
      "[26/10/2025 12:24:10] EMAIL SENT – Subject: “Staff Salary Update” – Attachments: payroll.xlsm",

      "On Mail Server",
      "[26/10/2025 12:24:10] EMAIL SENT – Subject: “Staff Salary Update” – Attachments: payroll.xlsm",
      "[26/10/2025 12:29:41] EMAIL SENT – Subject: “Payroll Correction” – Attachments: payroll_v2.xlsm",

      "On Terminal B – Recipient’s (Victim’s) System",
      "[26/10/2025 12:25:03] OUTGOING CONNECTION – IP: 102.77.13.9",
      "[26/10/2025 12:27:14] ANTIVIRUS ALERT – Macro execution blocked in payroll.xlsm",

      "On Terminal B again (Malware Activity)",
      "[26/10/2025 12:29:41] EMAIL SENT – Subject: “Payroll Correction” – Attachments: payroll_v2.xlsm"
    ],
    configFile: `Terminal A
// /etc/mail/security.conf
attachment_scanning = partial
macro_filtering = disabled
outbound_firewall = off
auto_forward = enabled

Terminal B
// /etc/mail/security.conf
attachment_scanning = partial
macro_filtering = disabled
outbound_firewall = off
auto_forward = enabled`,
    questions: [
      {
        id: 1,
        text: "What suspicious thing happened?",
        marks: 5,
        answer: "A malicious Excel file (payroll.xlsm) with macros was sent from HR’s system, and after the recipient opened it, a new infected email (payroll_v2.xlsm) was sent automatically — indicating the macro executed malware.",
        criteria: [
          "Identified the malicious macro file",
          "Recognized automatic email propagation",
          "Linked macro execution to malware spread"
        ]
      },
      {
        id: 2,
        text: "Which settings made it possible?",
        marks: 10,
        answer: "Macro filtering was disabled, attachment scanning was only partial, and outbound firewall was off — allowing the macro to execute and send emails automatically.",
        criteria: [
          "Identified macro_filtering = disabled",
          "Noted attachment_scanning = partial",
          "Mentioned outbound_firewall = off",
          "Explained how these allowed infection spread"
        ]
      },
      {
        id: 3,
        text: "How can the IT team prevent this?",
        marks: 10,
        answer: "Enable macro filtering, enforce full attachment scanning, turn on outbound firewall, and disable automatic email forwarding to prevent malware propagation through macros.",
        criteria: [
          "Recommended enabling macro filtering",
          "Suggested full attachment scanning",
          "Mentioned enabling outbound firewall",
          "Provided complete mitigation strategy"
        ]
      }
    ]
  }
];
