# App Script Swiss Knife

A comprehensive Google Apps Script utility library that provides various automation tools and integrations for social media management, messaging, calendar operations, and more.

## Features

### API Endpoints
- **POST Handler**: Manages various POST endpoints including:
  - Out-of-office status checker
  - GOG 2FA token retrieval
  - Telegram bot webhook handler

### Telegram Bot Integration
- Custom command handling
- Message sending capabilities
- Photo sharing functionality
- Traffic monitoring and reporting
- Real-time CCTV image capture

### Social Media Automation
- Automated posting to LinkedIn and Facebook via Zapier
- Support for text, images, and links
- Customizable post scheduling
- Property management advertising automation

### Google Services Integration
- Calendar integration for out-of-office status
- Gmail integration for email parsing
- Google Maps integration for traffic estimates
- Screenshot service integration

### Steam Gifts Automation
- Automatic giveaway entry
- Point tracking
- XSRF token management

## Core Components

### API Handlers
- `doPost.ts`: Main API endpoint handler
- `telegram_handler.ts`: Telegram bot command processor
- `responder_helper.ts`: API response formatter

### Service Integrations
- `google_calendar_helper.ts`: Calendar operations
- `google_maps_client.ts`: Maps API integration
- `gmail_helper.ts`: Email operations
- `screenshot_service.ts`: Web screenshot capture
- `steam_gifts_lib.ts`: Steam giveaway automation

### Utility Classes
- `time_utils.ts`: Time manipulation utilities
- `url_string_helper.ts`: URL manipulation
- `url_fetch_app_helper.ts`: HTTP request wrapper

### Workers
- `run_ads_manager.ts`: Advertisement automation
- `run_majelic_point_ads_worker.ts`: Property-specific ad worker
- `run_spring_wood_ads_worker.ts`: Property-specific ad worker
- `steam_gifts_worker.ts`: Steam giveaway automation

## Installation

1. Clone or fork this repository
2. Install clasp on your local machine:
   ```bash
   npm install -g @google/clasp
   ```
3. Configure clasp with your Google account
4. Copy `.clasp.json.example` to `.clasp.json` and update with your configuration
5. Push to Google Apps Script:
   ```bash
   clasp push
   ```

## Configuration

The following script properties need to be set in your Google Apps Script project:

- `api_secret_token`: API authentication token
- `calendar_id`: Google Calendar ID
- `screendot_token`: Screendot API token
- `telegram_bot_token`: Telegram Bot API token
- `linkedin_zapier_token`: LinkedIn Zapier integration token
- `facebook_zapier_webhook_url`: Facebook Zapier webhook URL
- `linkedin_zapier_webhook_url`: LinkedIn Zapier webhook URL
- `steam_gifts_token`: Steam Gifts authentication token
- `maps_token`: Google Maps API token

## Trigger Setup

To automate the workers using Google Apps Script triggers:

1. Open your Google Apps Script project
2. Navigate to "Triggers" in the left sidebar
3. Click "+ Add Trigger" button
4. Configure triggers for each worker:

### Advertisement Workers
```javascript
Function: runAdsManager
Event source: Time-driven
Type: Day timer
Time: Select preferred time (e.g., "6 AM to 7 AM")
```

### Property-Specific Ad Workers
```javascript
Function: runMajelicPointAdsWorker
Event source: Time-driven
Type: Week timer
Time: Select preferred day and time

Function: runSpringWoodAdsWorker
Event source: Time-driven
Type: Week timer
Time: Select preferred day and time
```

### Steam Gifts Worker
```javascript
Function: steamGiftsWorker
Event source: Time-driven
Type: Hour timer
Select hours: Every 1 hour
```

5. Click "Save" for each trigger
6. Verify trigger status in the Triggers dashboard

## Usage

### API Endpoints
POST /
```json
{
"path": "IS_TODAY_OUT_OF_OFFICE | GOG_TOKEN | TELEGRAM_BOT_WEBHOOK",
"secretToken": "your-secret-token",
"data": {}
}
```

### Telegram Bot Commands

- `/time`: Get current time
- `/test-ss`: Test screenshot functionality
- `/work`: Get traffic predictions and CCTV images

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💙 Support My Work

If you find my work helpful, consider supporting me:

[![PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/sudtanj)

### Donate Bitcoin:
<img src="https://i.imgur.com/tlwaL97.png" alt="Bitcoin QR Code" width="350"/>  
**Bitcoin Address:** `32Ja5bcaAAYXFjKCRmcYe3SM2RsSUCmXtQ`