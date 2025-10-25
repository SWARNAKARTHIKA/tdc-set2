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
      "[21/10/2025 07:58:00] BACKUP SERVICE STARTED",
      "[21/10/2025 08:00:00] ANTIVIRUS ALERT – Database outdated (last update: 10 days ago)",
      "[21/10/2025 08:01:22] TEMP FILE DELETED – /temp/cache.tmp",
      "[21/10/2025 08:02:12] FILE SCANNED – infected_file.exe → No threat detected",
      "[21/10/2025 08:03:00] USER LOGIN – AdminUser",
      "[21/10/2025 08:03:11] NETWORK LATENCY SPIKE – 700ms",
      "[21/10/2025 08:05:32] SYSTEM INFECTED – malware_activity_detected",
      "[21/10/2025 08:06:00] AUTO CLEANUP – skipped",
      "[21/10/2025 08:07:20] SECURITY PATCH UPDATE – pending",
      "[21/10/2025 08:08:30] DISK SPACE CHECK – OK",
      "[21/10/2025 08:09:50] FIREWALL CHECK – success"
    ],
    configFile: `auto_update = off
scan_frequency = weekly
threat_notification = disabled
firewall_status = enabled
backup_schedule = hourly
temp_cleanup = on
system_patch_mode = manual
log_retention = extended
network_latency_threshold = 600ms`,
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