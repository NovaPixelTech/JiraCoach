/* ==========================================================================
   Jira Coach - i18n (EN/EL)
   Technical terms/objects remain in English.
   ========================================================================== */
(function () {
  'use strict';
  var RC = (window.RC = window.RC || {});
  var dict = {
    el: {
      'Dashboard': 'Πίνακας ελέγχου', 'Learn': 'Εκμάθηση', 'Practice': 'Εξάσκηση', 'Lab': 'Εργαστήριο',
      'My examples': 'Τα παραδείγματά μου', 'Reference': 'Αναφορά', 'Troubleshoot': 'Αντιμετώπιση προβλημάτων',
      'Settings': 'Ρυθμίσεις', 'Search': 'Αναζήτηση', 'Search everything': 'Αναζήτηση παντού',
      'Welcome back.': 'Καλώς ήρθες ξανά.', 'Welcome back, {name}.': 'Καλώς ήρθες ξανά, {name}.',
      'Continue studying': 'Συνέχιση μελέτης', 'Start a card review': 'Έναρξη επανάληψης καρτών',
      'Take the mixed quiz': 'Κάνε το μικτό quiz', 'Open settings': 'Άνοιγμα ρυθμίσεων',
      'Language': 'Γλώσσα', 'English': 'English', 'Greek': 'Ελληνικά',
      'Daily goal': 'Ημερήσιος στόχος', 'New cards per day': 'Νέες κάρτες ανά ημέρα',
      'Your name': 'Το όνομά σου', 'Optional': 'Προαιρετικό', 'Theme': 'Θέμα', 'Dark': 'Σκούρο', 'Light': 'Φωτεινό',
      'Export JSON': 'Εξαγωγή JSON', 'Import JSON': 'Εισαγωγή JSON', 'Reset progress': 'Επαναφορά προόδου',
      'Erase everything': 'Διαγραφή όλων', 'Save settings': 'Αποθήκευση ρυθμίσεων',
      'Settings saved': 'Οι ρυθμίσεις αποθηκεύτηκαν', 'Backup downloaded': 'Το αντίγραφο ασφαλείας λήφθηκε',
      'Lesson': 'Μάθημα', 'Lessons': 'Μαθήματα', 'Quiz': 'Quiz', 'Cards': 'Κάρτες', 'Due': 'Εκκρεμείς',
      'Review': 'Επανάληψη', 'Done': 'Ολοκληρώθηκε', 'minutes': 'λεπτά', 'min': 'λεπτά',
      'Beginner': 'Αρχάριο', 'Intermediate': 'Μεσαίο', 'Advanced': 'Προχωρημένο',
      'All levels': 'Όλα τα επίπεδα', 'All modules': 'Όλες οι ενότητες', 'Filter': 'Φίλτρο',
      'No results': 'Κανένα αποτέλεσμα', 'Nothing here yet': 'Τίποτα εδώ ακόμα',
      'Copy': 'Αντιγραφή', 'Copied': 'Αντιγράφηκε', 'Close': 'Κλείσιμο', 'Cancel': 'Ακύρωση',
      'Save': 'Αποθήκευση', 'Delete': 'Διαγραφή', 'Edit': 'Επεξεργασία', 'Create': 'Δημιουργία',
      'Back': 'Πίσω', 'Next': 'Επόμενο', 'Previous': 'Προηγούμενο', 'Continue': 'Συνέχεια',
      'Show answer': 'Εμφάνιση απάντησης', 'Again': 'Ξανά', 'Hard': 'Δύσκολο', 'Good': 'Καλό', 'Easy': 'Εύκολο',
      'Correct': 'Σωστό', 'Incorrect': 'Λάθος', 'Explanation': 'Εξήγηση', 'Key points': 'Βασικά σημεία',
      'Resources': 'Πόροι', 'Notes': 'Σημειώσεις', 'Examples': 'Παραδείγματα',
      'Your stats': 'Τα στατιστικά σου', 'day': 'ημέρα', 'days': 'ημέρες',
      'Jira scaffolder': 'Jira scaffolder', 'Code doctor': 'Code doctor', 'Generate setup': 'Δημιουργία setup',
      'Check code': 'Έλεγχος κώδικα', 'Clear': 'Καθαρισμός', 'Load a sample': 'Φόρτωση δείγματος',
      'Nothing checked yet': 'Δεν έγινε έλεγχος ακόμα', 'Paste some config first': 'Επικόλλησε πρώτα ρυθμίσεις',
      'Troubleshooting': 'Αντιμετώπιση προβλημάτων', 'Symptom': 'Σύμπτωμα', 'Cause': 'Αιτία', 'Fix': 'Λύση',
      'Workspaces': 'Χώροι εργασίας', 'Library': 'Βιβλιοθήκη', 'Configure your trainer': 'Ρύθμισε τον εκπαιδευτή σου',
      'Everything lives in this browser. Export a backup before clearing site data or switching machines.': 'Όλα αποθηκεύονται σε αυτόν τον browser. Κάνε εξαγωγή αντιγράφου πριν καθαρίσεις δεδομένα ή αλλάξεις συσκευή.',
      'Profile': 'Προφίλ', 'Appearance': 'Εμφάνιση', 'Data': 'Δεδομένα', 'About': 'Σχετικά',
      'Learn Jira from the ground up': 'Μάθε Jira από τα βασικά', 'Up next': 'Επόμενο', 'Completed': 'Ολοκληρωμένο',
      'Mark complete': 'Σήμανση ως ολοκληρωμένο', 'Lesson quiz': 'Quiz μαθήματος', 'Mixed quiz': 'Μικτό quiz',
      'My cards': 'Οι κάρτες μου', 'All caught up': 'Όλα εντάξει', 'No cards due right now.': 'Δεν υπάρχουν εκκρεμείς κάρτες τώρα.',
      'Next question': 'Επόμενη ερώτηση', 'Try again': 'Δοκίμασε ξανά', 'Back to lessons': 'Πίσω στα μαθήματα',
      'Search / commands': 'Αναζήτηση / εντολές', 'Local-first - no account': 'Τοπικά στον browser - χωρίς λογαριασμό',
      'Your library': 'Η βιβλιοθήκη σου', 'New example': 'Νέο παράδειγμα', 'Save example': 'Αποθήκευση παραδείγματος',
      'Export': 'Εξαγωγή', 'Import': 'Εισαγωγή', 'Reset': 'Επαναφορά', 'Title': 'Τίτλος', 'Tags': 'Ετικέτες',
      'Toggle theme': 'Εναλλαγή θέματος',
      "Study streak":"Σερί μελέτης",
      "Search or jump to.":"Αναζήτηση ή μετάβαση...",
      "Up next":"Επόμενο",
      "Toggle theme":"Εναλλαγή θέματος",
      "Export a backup":"Εξαγωγή αντιγράφου",
      "Open settings":"Άνοιγμα ρυθμίσεων",
      "Save a new example":"Αποθήκευση νέου παραδείγματος",
      "Scaffold a Jira project":"Δημιουργία Jira project",
      "Check config with the doctor":"Έλεγχος ρυθμίσεων με doctor",
      "Take the mixed quiz":"Κάνε μικτό quiz",
      "Start a card review":"Έναρξη επανάληψης καρτών",
      "Continue studying":"Συνέχιση μελέτης",
      "Switch dark / light":"Εναλλαγή σκούρου / φωτεινού",
      "Goals, theme, import/export":"Στόχοι, θέμα, εισαγωγή/εξαγωγή",
      "Download all local data as JSON":"Λήψη όλων των τοπικών δεδομένων ως JSON",
      "Your own code plus notes":"Ο δικός σου κώδικας και σημειώσεις",
      "Generate a workflow, JQL, automation starter":"Δημιουργία workflow, JQL, automation",
      "Heuristic checks for JQL, workflows, automation":"Έλεγχοι για JQL, workflows, automation",
      "Questions from every module":"Ερωτήσεις από όλες τις ενότητες",
      "Spaced repetition due now":"Κάρτες επανάληψης που εκκρεμούν",
      "Jump back into the curriculum":"Επιστροφή στο πρόγραμμα"
    }
  };

  function lang() { return (RC.store && RC.store.state && RC.store.state.settings && RC.store.state.settings.lang) || 'en'; }
  function t(key, vars) {
    var l = lang();
    var s = (l !== 'en' && dict[l] && dict[l][key]) || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]); });
    return s;
  }
  function pick(obj, field) {
    if (!obj) return '';
    var l = lang();
    if (l !== 'en') {
      var k = field + '_' + l;
      if (obj[k] != null && obj[k] !== '') return obj[k];
    }
    return obj[field] == null ? '' : obj[field];
  }
  RC.i18n = { t: t, lang: lang, dict: dict, pick: pick };
})();