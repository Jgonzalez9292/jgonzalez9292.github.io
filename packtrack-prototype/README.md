# PackTrack prototype

PackTrack is a phone-friendly proof of concept for a Cub Scout pack quartermaster system. It demonstrates how QR-tagged equipment could be searched, checked out, returned, moved, connected to events, and preserved in an activity history.

## Run it

Open `index.html` in any modern web browser. No installation, server, account, or internet connection is required.

The demo stores changes in the browser using `localStorage`. Use **Activity → Reset demo data** to restore the original sample records.

## Suggested five-minute demo

1. Open the dashboard and show the available/checked-out totals.
2. Choose **Scan item** and select `PACK-0001`.
3. Check the stove out for the September campout.
4. Open **Events** and show how the gear list stays connected to the event.
5. Scan the stove again, return it, and choose its condition.
6. Open **Activity** to show the permanent audit trail and CSV export.

## Prototype boundaries

This is a front-end concept with fictional sample data. A production version would add a shared database, authenticated user roles, real camera-based QR scanning, server-side audit history, backups, and privacy controls.
