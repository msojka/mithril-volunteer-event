window.EntryList = {}

EntryList.view = function () {
  return m('.entry-list', [
    m('h1', 'All Entries'),
    m('a[href=/entries/new]', {config: m.route}, 'Add New Entry'),
    Entry.all().map(entryView)
  ])
}

function entryView(entry) {
  var date = new Date(entry.enteredAt)
  return m('.entry', [
    m('p', "Entered at: " + date.toString()),
    m('ul', entry.volunteers.map(volunteerView))
  ])
}

function volunteerView(volunteer) {
  return m('li.volunteer', [
    m('span', volunteer.name),
    m('span', "(" + volunteer.email + ")")
  ])
}
