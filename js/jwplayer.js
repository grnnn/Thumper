//<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
//<html xmlns="http://www.w3.org/1999/xhtml">
  
  

  


  <head>
    <title>
      jwplayer.js in tags/mediaplayer-6.6-rc1/src/js
     – JW Player
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="search" href="/trac/search" />
        <link rel="help" href="/trac/wiki/TracGuide" />
        <link rel="alternate" href="/trac/browser/tags/mediaplayer-6.6-rc1/src/js/jwplayer.js?format=txt" type="text/plain" title="Plain Text" /><link rel="alternate" href="/trac/export/3805/tags/mediaplayer-6.6-rc1/src/js/jwplayer.js" type="application/javascript; charset=iso-8859-15" title="Original Format" />
        <link rel="start" href="/trac/wiki" />
        <link rel="stylesheet" href="/trac/chrome/common/css/trac.css" type="text/css" /><link rel="stylesheet" href="/trac/chrome/common/css/code.css" type="text/css" /><link rel="stylesheet" href="/trac/pygments/trac.css" type="text/css" /><link rel="stylesheet" href="/trac/chrome/common/css/browser.css" type="text/css" />
        <link rel="prev" href="/trac/browser/trunk/jw6/src/js/jwplayer.js?rev=2972" title="Revision 2972" />
        <link rel="shortcut icon" href="http://www.longtailvideo.com/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="http://www.longtailvideo.com/favicon.ico" type="image/x-icon" />
      <link type="application/opensearchdescription+xml" rel="search" href="/trac/search/opensearch" title="Search JW Player" />
    <script type="text/javascript" src="/trac/chrome/common/js/jquery.js"></script><script type="text/javascript" src="/trac/chrome/common/js/babel.js"></script><script type="text/javascript" src="/trac/chrome/common/js/messages/en_US.js"></script><script type="text/javascript" src="/trac/chrome/common/js/trac.js"></script><script type="text/javascript" src="/trac/chrome/common/js/search.js"></script>
    <!--[if lt IE 7]>
    <script type="text/javascript" src="/trac/chrome/common/js/ie_pre7_hacks.js"></script>
    <![endif]-->
    <script type="text/javascript" src="/trac/chrome/common/js/folding.js"></script>
    <script type="text/javascript">
      jQuery(document).ready(function($) {
        $(".trac-toggledeleted").show().click(function() {
                  $(this).siblings().find(".trac-deleted").toggle();
                  return false;
        }).click();
        $("#jumploc input").hide();
        $("#jumploc select").change(function () {
          this.parentNode.parentNode.submit();
        });
          $('#preview table.code').enableCollapsibleColumns($('#preview table.code thead th.content'));
      });
    </script>
    <link rel="stylesheet" type="text/css" href="/trac/chrome/site/style.css" />
    <script type="text/javascript" src="/trac/chrome/site/swfobject.js"></script>
  </head>
  <body>
	<!--
	<div id="crosslinks">
		Other product management sites: 
		<a href="http://trac.longtailvideo.com/trac">Website/Adsolution</a>  | 
		<a href="https://code.bitsontherun.com/trac">Bits on the Run</a> | 
		<a href="http://ova.longtailvideo.com/trac">Open Video Ads</a> 
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			if($.trim($('#metanav').text()).substr(0,9) == 'logged in') { 
				$('#crosslinks').css('display','block');
			}
		});
	</script>
	-->
    <div id="banner">
      <div id="header">
        <a id="logo" href="http://developer.longtailvideo.com/trac"><img src="/trac/chrome/site/logo.gif" alt="" /></a>
      </div>
      <form id="search" action="/trac/search" method="get">
        <div>
          <label for="proj-search">Search:</label>
          <input type="text" id="proj-search" name="q" size="18" value="" />
          <input type="submit" value="Search" />
        </div>
      </form>
      <div id="metanav" class="nav">
    <ul>
      <li class="last first"><a href="/trac/login">Login</a></li>
    </ul>
  </div>
    </div>
    <div id="mainnav" class="nav">
    <ul>
      <li class="first"><a href="/trac/wiki">Wiki</a></li><li><a href="/trac/timeline">Timeline</a></li><li class="active"><a href="/trac/browser">Source Code</a></li><li class="last"><a href="/trac/report/3">Tickets</a></li>
    </ul>
  </div>
    <div id="main">
      <div id="ctxtnav" class="nav">
        <h2>Context Navigation</h2>
          <ul>
              <li class="first"><span>&larr; <a class="prev" href="/trac/browser/trunk/jw6/src/js/jwplayer.js?rev=2972" title="Revision 2972">Previous Revision</a></span></li><li><span class="missing">Next Revision &rarr;</span></li><li><a href="/trac/browser/trunk/jw6/src/js/jwplayer.js?annotate=blame" title="Annotate each line with the last changed revision (this can be time consuming...)">Annotate</a></li><li class="last"><a href="/trac/log/tags/mediaplayer-6.6-rc1/src/js/jwplayer.js">Revision Log</a></li>
          </ul>
        <hr />
      </div>
    <div id="content" class="browser">
          <h1>
<a class="pathentry first" href="/trac/browser?order=name" title="Go to repository root">source:</a>
<a class="pathentry" href="/trac/browser/tags?order=name" title="View tags">tags</a><span class="pathentry sep">/</span><a class="pathentry" href="/trac/browser/tags/mediaplayer-6.6-rc1?order=name" title="View mediaplayer-6.6-rc1">mediaplayer-6.6-rc1</a><span class="pathentry sep">/</span><a class="pathentry" href="/trac/browser/tags/mediaplayer-6.6-rc1/src?order=name" title="View src">src</a><span class="pathentry sep">/</span><a class="pathentry" href="/trac/browser/tags/mediaplayer-6.6-rc1/src/js?order=name" title="View js">js</a><span class="pathentry sep">/</span><a class="pathentry" href="/trac/browser/tags/mediaplayer-6.6-rc1/src/js/jwplayer.js?order=name" title="View jwplayer.js">jwplayer.js</a>
<span class="pathentry sep">@</span>
  <a class="pathentry" href="/trac/changeset/2981" title="View changeset 2981">2981</a>
<br style="clear: both" />
</h1>
        <div id="jumprev">
          <form action="" method="get">
            <div>
              <label for="rev">
                View revision:</label>
              <input type="text" id="rev" name="rev" size="6" />
            </div>
          </form>
        </div>
        <div id="jumploc">
          <form action="" method="get">
            <div class="buttons">
              <label for="preselected">Visit:</label>
              <select id="preselected" name="preselected">
                <option selected="selected"></option>
                <optgroup label="branches">
                  <option value="/trac/browser/trunk">trunk</option><option value="/trac/browser/branches/plugins">branches/plugins</option>
                </optgroup><optgroup label="tags">
                  <option value="/trac/browser/tags/flvplayer-2.5?rev=90">tags/flvplayer-2.5</option><option value="/trac/browser/tags/jw6-rc1?rev=2648">tags/jw6-rc1</option><option value="/trac/browser/tags/jw6-rc2?rev=2699">tags/jw6-rc2</option><option value="/trac/browser/tags/jw6-rc3?rev=2766">tags/jw6-rc3</option><option value="/trac/browser/tags/jw6-rc4?rev=2800">tags/jw6-rc4</option><option value="/trac/browser/tags/mediaplayer-3.2?rev=90">tags/mediaplayer-3.2</option><option value="/trac/browser/tags/mediaplayer-3.4?rev=90">tags/mediaplayer-3.4</option><option value="/trac/browser/tags/mediaplayer-3.6?rev=90">tags/mediaplayer-3.6</option><option value="/trac/browser/tags/mediaplayer-3.8?rev=90">tags/mediaplayer-3.8</option><option value="/trac/browser/tags/mediaplayer-3.10?rev=90">tags/mediaplayer-3.10</option><option value="/trac/browser/tags/mediaplayer-3.12?rev=90">tags/mediaplayer-3.12</option><option value="/trac/browser/tags/mediaplayer-3.14?rev=90">tags/mediaplayer-3.14</option><option value="/trac/browser/tags/mediaplayer-3.15?rev=90">tags/mediaplayer-3.15</option><option value="/trac/browser/tags/mediaplayer-3.16?rev=90">tags/mediaplayer-3.16</option><option value="/trac/browser/tags/mediaplayer-3.17?rev=92">tags/mediaplayer-3.17</option><option value="/trac/browser/tags/mediaplayer-4.0?rev=885">tags/mediaplayer-4.0</option><option value="/trac/browser/tags/mediaplayer-4.1?rev=885">tags/mediaplayer-4.1</option><option value="/trac/browser/tags/mediaplayer-4.2?rev=885">tags/mediaplayer-4.2</option><option value="/trac/browser/tags/mediaplayer-4.3?rev=885">tags/mediaplayer-4.3</option><option value="/trac/browser/tags/mediaplayer-4.4?rev=885">tags/mediaplayer-4.4</option><option value="/trac/browser/tags/mediaplayer-4.5?rev=885">tags/mediaplayer-4.5</option><option value="/trac/browser/tags/mediaplayer-4.6?rev=885">tags/mediaplayer-4.6</option><option value="/trac/browser/tags/mediaplayer-4.7?rev=1646">tags/mediaplayer-4.7</option><option value="/trac/browser/tags/mediaplayer-4.7.botr?rev=1236">tags/mediaplayer-4.7.botr</option><option value="/trac/browser/tags/mediaplayer-5.0?rev=885">tags/mediaplayer-5.0</option><option value="/trac/browser/tags/mediaplayer-5.0.alpha?rev=433">tags/mediaplayer-5.0.alpha</option><option value="/trac/browser/tags/mediaplayer-5.0.beta?rev=563">tags/mediaplayer-5.0.beta</option><option value="/trac/browser/tags/mediaplayer-5.0.rc1?rev=677">tags/mediaplayer-5.0.rc1</option><option value="/trac/browser/tags/mediaplayer-5.1?rev=898">tags/mediaplayer-5.1</option><option value="/trac/browser/tags/mediaplayer-5.1.910?rev=911">tags/mediaplayer-5.1.910</option><option value="/trac/browser/tags/mediaplayer-5.1.rc1?rev=857">tags/mediaplayer-5.1.rc1</option><option value="/trac/browser/tags/mediaplayer-5.2?rev=1157">tags/mediaplayer-5.2</option><option value="/trac/browser/tags/mediaplayer-5.2.rc1?rev=1068">tags/mediaplayer-5.2.rc1</option><option value="/trac/browser/tags/mediaplayer-5.3?rev=1655">tags/mediaplayer-5.3</option><option value="/trac/browser/tags/mediaplayer-5.3.rc1?rev=1346">tags/mediaplayer-5.3.rc1</option><option value="/trac/browser/tags/mediaplayer-5.4?rev=1656">tags/mediaplayer-5.4</option><option value="/trac/browser/tags/mediaplayer-5.5?rev=1654">tags/mediaplayer-5.5</option><option value="/trac/browser/tags/mediaplayer-5.5.rc1?rev=1654">tags/mediaplayer-5.5.rc1</option><option value="/trac/browser/tags/mediaplayer-5.6?rev=1772">tags/mediaplayer-5.6</option><option value="/trac/browser/tags/mediaplayer-5.6.rc1?rev=1753">tags/mediaplayer-5.6.rc1</option><option value="/trac/browser/tags/mediaplayer-5.7?rev=1897">tags/mediaplayer-5.7</option><option value="/trac/browser/tags/mediaplayer-5.7.rc1?rev=1844">tags/mediaplayer-5.7.rc1</option><option value="/trac/browser/tags/mediaplayer-5.8?rev=2012">tags/mediaplayer-5.8</option><option value="/trac/browser/tags/mediaplayer-5.9?rev=2158">tags/mediaplayer-5.9</option><option value="/trac/browser/tags/mediaplayer-5.9.rc1?rev=2103">tags/mediaplayer-5.9.rc1</option><option value="/trac/browser/tags/mediaplayer-5.10?rev=2296">tags/mediaplayer-5.10</option><option value="/trac/browser/tags/mediaplayer-6.0?rev=2815">tags/mediaplayer-6.0</option><option value="/trac/browser/tags/mediaplayer-6.1?rev=2976">tags/mediaplayer-6.1</option><option value="/trac/browser/tags/mediaplayer-6.2?rev=3117">tags/mediaplayer-6.2</option><option value="/trac/browser/tags/mediaplayer-6.2-rc1?rev=3085">tags/mediaplayer-6.2-rc1</option><option value="/trac/browser/tags/mediaplayer-6.3?rev=3245">tags/mediaplayer-6.3</option><option value="/trac/browser/tags/mediaplayer-6.4?rev=3362">tags/mediaplayer-6.4</option><option value="/trac/browser/tags/mediaplayer-6.5?rev=3612">tags/mediaplayer-6.5</option><option value="/trac/browser/tags/mediaplayer-6.6-rc1?rev=3805">tags/mediaplayer-6.6-rc1</option><option value="/trac/browser/tags/mediaplayer-html5-beta?rev=1216">tags/mediaplayer-html5-beta</option><option value="/trac/browser/tags/mp3player-2.3?rev=90">tags/mp3player-2.3</option><option value="/trac/browser/tags/plugins?rev=2452">tags/plugins</option><option value="/trac/browser/tags/sdks?rev=2827">tags/sdks</option><option value="/trac/browser/tags/skins?rev=1850">tags/skins</option>
                </optgroup>
              </select>
              <input type="submit" value="Go!" title="Jump to the chosen preselected path" />
            </div>
          </form>
        </div>
      <table id="info" summary="Revision info">
        <tr>
          <th scope="col">Revision <a href="/trac/changeset/2981">2981</a>,
            <span title="419 bytes">419 bytes</span>
            checked in by pablo, <a class="timeline" href="/trac/timeline?from=2012-12-18T14%3A20%3A30-05%3A00&amp;precision=second" title="2012-12-18T14:20:30-05:00 in Timeline">7 months</a> ago
            (<a href="/trac/changeset/2981/trunk/jw6/src/js/jwplayer.js">diff</a>)</th>
        </tr>
        <tr>
          <td class="message searchable">
              <p>
Removing player binaries - player must be built<br />
</p>
          </td>
        </tr>
      </table>
      <div id="preview" class="searchable">
        
  <table class="code"><thead><tr><th class="lineno" title="Line numbers">Line</th><th class="content"> </th></tr></thead><tbody><tr><th id="L1"><a href="#L1">1</a></th><td><span class="cm">/**</span></td></tr><tr><th id="L2"><a href="#L2">2</a></th><td><span class="cm"> * JW Player namespace definition</span></td></tr><tr><th id="L3"><a href="#L3">3</a></th><td><span class="cm"> * @version 6.0</span></td></tr><tr><th id="L4"><a href="#L4">4</a></th><td><span class="cm"> */</span></td></tr><tr><th id="L5"><a href="#L5">5</a></th><td><span class="nx">jwplayer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">container</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th id="L6"><a href="#L6">6</a></th><td>        <span class="k">if</span> <span class="p">(</span><span class="nx">jwplayer</span><span class="p">.</span><span class="nx">api</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th id="L7"><a href="#L7">7</a></th><td>                <span class="k">return</span> <span class="nx">jwplayer</span><span class="p">.</span><span class="nx">api</span><span class="p">.</span><span class="nx">selectPlayer</span><span class="p">(</span><span class="nx">container</span><span class="p">);</span></td></tr><tr><th id="L8"><a href="#L8">8</a></th><td>        <span class="p">}</span></td></tr><tr><th id="L9"><a href="#L9">9</a></th><td><span class="p">};</span></td></tr><tr><th id="L10"><a href="#L10">10</a></th><td></td></tr><tr><th id="L11"><a href="#L11">11</a></th><td><span class="nx">jwplayer</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="s1">'X.Y.ZZZZ'</span><span class="p">;</span></td></tr><tr><th id="L12"><a href="#L12">12</a></th><td></td></tr><tr><th id="L13"><a href="#L13">13</a></th><td><span class="c1">// "Shiv" method for older IE browsers; required for parsing media tags</span></td></tr><tr><th id="L14"><a href="#L14">14</a></th><td><span class="c1"></span><span class="nx">jwplayer</span><span class="p">.</span><span class="nx">vid</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">"video"</span><span class="p">);</span></td></tr><tr><th id="L15"><a href="#L15">15</a></th><td><span class="nx">jwplayer</span><span class="p">.</span><span class="nx">audio</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">"audio"</span><span class="p">);</span></td></tr><tr><th id="L16"><a href="#L16">16</a></th><td><span class="nx">jwplayer</span><span class="p">.</span><span class="nx">source</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">"source"</span><span class="p">);</span></td></tr></tbody></table>

      </div>
      <div id="help"><strong>Note:</strong> See <a href="/trac/wiki/TracBrowser">TracBrowser</a>
        for help on using the repository browser.</div>
      <div id="anydiff">
        <form action="/trac/diff" method="get">
          <div class="buttons">
            <input type="hidden" name="new_path" value="/tags/mediaplayer-6.6-rc1/src/js/jwplayer.js" />
            <input type="hidden" name="old_path" value="/tags/mediaplayer-6.6-rc1/src/js/jwplayer.js" />
            <input type="hidden" name="new_rev" />
            <input type="hidden" name="old_rev" />
            <input type="submit" value="View changes..." title="Select paths and revs for Diff" />
          </div>
        </form>
      </div>
    </div>
    <div id="altlinks">
      <h3>Download in other formats:</h3>
      <ul>
        <li class="first">
          <a rel="nofollow" href="/trac/browser/tags/mediaplayer-6.6-rc1/src/js/jwplayer.js?format=txt">Plain Text</a>
        </li><li class="last">
          <a rel="nofollow" href="/trac/export/3805/tags/mediaplayer-6.6-rc1/src/js/jwplayer.js">Original Format</a>
        </li>
      </ul>
    </div>
    </div>
    <div id="footer" lang="en" xml:lang="en"><hr />
      <a id="tracpowered" href="http://trac.edgewall.org/"><img src="/trac/chrome/common/trac_logo_mini.png" height="30" width="107" alt="Trac Powered" /></a>
      <p class="left">Powered by <a href="/trac/about"><strong>Trac 0.12.2</strong></a><br />
        By <a href="http://www.edgewall.org/">Edgewall Software</a>.</p>
      <p class="right">Visit the Trac open source project at<br /><a href="http://trac.edgewall.org/">http://trac.edgewall.org/</a></p>
    </div>
	<script type="text/javascript">
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
	</script>
	<script type="text/javascript">
		try {
			var pageTracker = _gat._getTracker("UA-4011032-5");
			pageTracker._trackPageview();
		} catch(err) {}
	</script>
</body>
</html>