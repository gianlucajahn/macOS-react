import DropdownItemType from "../../types/DropdownItemType";
import DropdownItem from "../../types/DropdownItemType";
import storeType from "../../types/store";

const getDropdownContent = (state: storeType) => {
  let content: DropdownItemType[] = [];
  switch (state.section) {
    case "logo":
      content = [
        {
          name: "About This Mac",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "System Preferences",
          available: true,
        },
        {
          name: "App Store",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Recent Items",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Force Quit",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Sleep",
          available: true,
        },
        {
          name: "Restart",
          available: true,
        },
        {
          name: "Shut Down",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Lock Screen",
          available: true,
        },
        {
          name: "Log Out User",
          available: true,
        },
      ];
      break;
    case "finder":
      content = [
        {
          name: "About Finder",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Preferences",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Empty Trash",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Hide Finder",
          available: true,
        },
        {
          name: "Hide Others",
          available: true,
        },
        {
          name: "Show All",
          available: false,
        },
      ];
      break;
    case "file":
      content = [
        {
          name: "New Finder Window",
          available: true,
        },
        {
          name: "New Folder",
          available: true,
        },
        {
          name: "New Folder with Selection",
          available: false,
        },
        {
          name: "New Smart Folder",
          available: true,
        },
        {
          name: "New tab",
          available: true,
        },
        {
          name: "Open",
          available: false,
        },
        {
          name: "Open With",
          available: false,
        },
        {
          name: "Print",
          available: false,
        },
        {
          name: "Close Window",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Get Info",
          available: true,
        },
        {
          name: "Rename",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Compress",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Duplicate",
          available: false,
        },
        {
          name: "Make Alias",
          available: false,
        },
        {
          name: "Quick Look",
          available: false,
        },
        {
          name: "Show Original",
          available: false,
        },
        {
          name: "Add to Sidebar",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Move to Trash",
          available: false,
        },
        {
          name: "Eject",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Find",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Tags...",
          available: false,
        },
      ];
      break;
    case "edit":
      content = [
        {
          name: "Undo",
          available: false,
        },
        {
          name: "Redo",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Cut",
          available: false,
        },
        {
          name: "Copy",
          available: false,
        },
        {
          name: "Paste",
          available: false,
        },
        {
          name: "Select All",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Show Clipboard",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Start Dictation",
          available: true,
        },
        {
          name: "Emoji & Symbols",
          available: true,
        },
      ];
      break;
    case "view":
      content = [
        {
          name: "As Icons",
          available: false,
        },
        {
          name: "As List",
          available: false,
        },
        {
          name: "As Columns",
          available: false,
        },
        {
          name: "As Gallery",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Use Stacks",
          available: true,
        },
        {
          name: "Sort By",
          available: true,
        },
        {
          name: "Clean Up",
          available: false,
        },
        {
          name: "Clean Up By",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Hide Sidebar",
          available: false,
        },
        {
          name: "Show Preview",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Hide Toolbar",
          available: false,
        },
        {
          name: "Show All Tabs",
          available: false,
        },
        {
          name: "Show Tab Bar",
          available: false,
        },
        {
          name: "Show Path Bar",
          available: false,
        },
        {
          name: "Show Status Bar",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Customize Toolbar...",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Show View Options",
          available: true,
        },
        {
          name: "Show Preview Options",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Enter Full Screen",
          available: false,
        },
      ];
      break;
    case "go":
      content = [
        {
          name: "Back",
          available: false,
        },
        {
          name: "Forward",
          available: false,
        },
        {
          name: "Enclosing Folder",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Recents",
          available: true,
        },
        {
          name: "Documents",
          available: true,
        },
        {
          name: "Desktop",
          available: true,
        },
        {
          name: "Downloads",
          available: true,
        },
        {
          name: "Home",
          available: true,
        },
        {
          name: "Computer",
          available: true,
        },
        {
          name: "Airdrop",
          available: true,
        },
        {
          name: "Network",
          available: true,
        },
        {
          name: "iCloud Drive",
          available: true,
        },
        {
          name: "Applications",
          available: true,
        },
        {
          name: "Utilities",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Go to Folder",
          available: true,
        },
        {
          name: "Connect to Server",
          available: true,
        },
      ];
      break;
    case "windows":
      content = [
        {
          name: "Minimize",
          available: false,
        },
        {
          name: "Zoom",
          available: false,
        },
        {
          name: "Move Window to Left Side of Screen",
          available: false,
        },
        {
          name: "Move Window to Right Side of Screen",
          available: false,
        },
        {
          name: "Cycle Through Windows",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Show Previous Tab",
          available: false,
        },
        {
          name: "Show Next Tab",
          available: false,
        },
        {
          name: "Move Tab to New Window",
          available: false,
        },
        {
          name: "Merge all Windows",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Bring All to Front",
          available: true,
        },
      ];
      break;
    case "help":
      content = [
        {
          name: "Send Finder Feedback",
          available: true,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "macOS Help",
          available: true,
        },
      ];
      break;
  }

  return content;
};

export default getDropdownContent;
